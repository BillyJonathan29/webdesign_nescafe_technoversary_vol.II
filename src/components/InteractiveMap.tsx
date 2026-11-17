import { useEffect, useRef } from 'react'
import L from 'leaflet'
import { Destination } from '../data/destinations'

interface InteractiveMapProps {
  destinations: Destination[]
  selectedDestination: Destination | null
  onSelectDestination: (dest: Destination) => void
}

export default function InteractiveMap({
  destinations,
  selectedDestination,
  onSelectDestination,
}: InteractiveMapProps) {
  const mapContainerRef = useRef<HTMLDivElement>(null)
  const mapInstanceRef = useRef<L.Map | null>(null)
  const markersRef = useRef<{ [id: string]: L.Marker }>({})

  // 1. Initialize Map
  useEffect(() => {
    if (!mapContainerRef.current) return
    if (mapInstanceRef.current) return

    // Center on Mount Ciremai
    const ciremaiCenter: L.LatLngTuple = [-6.892, 108.412]

    const map = L.map(mapContainerRef.current, {
      center: ciremaiCenter,
      zoom: 11,
      scrollWheelZoom: false,
      zoomControl: true,
    })

    // OpenStreetMap standard tile layer (100% free, reliable, no API key required)
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      subdomains: 'abc',
      maxZoom: 18,
    }).addTo(map)

    mapInstanceRef.current = map

    return () => {
      map.remove()
      mapInstanceRef.current = null
    }
  }, [])

  // 2. Update Destination Markers
  useEffect(() => {
    const map = mapInstanceRef.current
    if (!map) return

    // Clear old markers
    Object.values(markersRef.current).forEach((marker) => marker.remove())
    markersRef.current = {}

    destinations.forEach((dest) => {
      const isSelected = selectedDestination?.id === dest.id

      const customIcon = L.divIcon({
        className: 'ciremai-clean-marker',
        html: `
          <div style="
            width: ${isSelected ? '26px' : '20px'};
            height: ${isSelected ? '26px' : '20px'};
            background: ${isSelected ? '#10b981' : '#059669'};
            border: 2.5px solid #ffffff;
            border-radius: 50%;
            box-shadow: 0 0 12px ${isSelected ? 'rgba(16,185,129,0.8)' : 'rgba(0,0,0,0.4)'};
            transition: all 0.2s ease;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
          ">
            <div style="
              width: 6px;
              height: 6px;
              background-color: #ffffff;
              border-radius: 50%;
            "></div>
          </div>
        `,
        iconSize: [isSelected ? 26 : 20, isSelected ? 26 : 20],
        iconAnchor: [isSelected ? 13 : 10, isSelected ? 13 : 10],
      })

      const marker = L.marker(dest.coordinates, { icon: customIcon }).addTo(map)

      marker.on('click', () => {
        onSelectDestination(dest)
      })

      marker.bindPopup(`
        <div style="padding: 10px; font-family: 'Mori', sans-serif; background: #0a1610; color: #ffffff; border-radius: 8px; min-width: 190px;">
          <span style="font-size: 10px; text-transform: uppercase; letter-spacing: 0.1em; color: #34d399; font-weight: 600; display: block; margin-bottom: 2px;">
            ${dest.categoryLabel}
          </span>
          <h4 style="font-size: 13px; font-weight: 600; margin: 0 0 3px 0; color: #ffffff;">
            ${dest.name}
          </h4>
          <p style="font-size: 11px; color: #94a3b8; margin: 0;">
            ${dest.elevation} &middot; ${dest.district}
          </p>
        </div>
      `)

      markersRef.current[dest.id] = marker
    })
  }, [destinations, selectedDestination, onSelectDestination])

  // 3. Center on Selected Destination
  useEffect(() => {
    const map = mapInstanceRef.current
    if (!map || !selectedDestination) return

    map.flyTo(selectedDestination.coordinates, 12.5, {
      duration: 1.0,
      easeLinearity: 0.25,
    })

    const activeMarker = markersRef.current[selectedDestination.id]
    if (activeMarker) {
      activeMarker.openPopup()
    }
  }, [selectedDestination])

  return (
    <div className="w-full h-[380px] sm:h-[420px] ciremai-dark-tiles relative z-10">
      <div ref={mapContainerRef} className="w-full h-full" />
    </div>
  )
}
