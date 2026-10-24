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

  // Initialize Map
  useEffect(() => {
    if (!mapContainerRef.current) return
    if (mapInstanceRef.current) return

    // Center of Mount Ciremai Caldera / Peak
    const ciremaiCenter: L.LatLngTuple = [-6.892, 108.406]

    const map = L.map(mapContainerRef.current, {
      center: ciremaiCenter,
      zoom: 11,
      scrollWheelZoom: false,
      zoomControl: true,
    })

    // Subdued, clean natural OpenStreetMap carto tile layer
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      maxZoom: 18,
    }).addTo(map)

    mapInstanceRef.current = map

    return () => {
      map.remove()
      mapInstanceRef.current = null
    }
  }, [])

  // Update Markers
  useEffect(() => {
    const map = mapInstanceRef.current
    if (!map) return

    // Clear old markers
    Object.values(markersRef.current).forEach((marker) => marker.remove())
    markersRef.current = {}

    // Add markers for current filtered destinations
    destinations.forEach((dest) => {
      const isSelected = selectedDestination?.id === dest.id

      // Custom editorial HTML marker
      const markerHtml = `
        <div class="custom-ciremai-marker flex items-center justify-center cursor-pointer transition-transform duration-200 ${
          isSelected ? 'scale-125 z-50' : 'hover:scale-110'
        }" style="width: 32px; height: 32px;">
          <div style="
            background-color: ${isSelected ? '#B77D58' : '#203D32'};
            color: #F5F2E9;
            width: 28px;
            height: 28px;
            border-radius: 4px;
            border: 2px solid #F5F2E9;
            box-shadow: 0 3px 8px rgba(0,0,0,0.25);
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 11px;
            font-weight: 700;
            font-family: 'Plus Jakarta Sans', sans-serif;
          ">
            ${dest.type === 'trail' ? '▲' : dest.type === 'waterfall' ? '≈' : '◈'}
          </div>
        </div>
      `

      const customIcon = L.divIcon({
        className: 'custom-leaflet-pin',
        html: markerHtml,
        iconSize: [32, 32],
        iconAnchor: [16, 16],
      })

      const marker = L.marker(dest.coordinates, { icon: customIcon }).addTo(map)

      marker.on('click', () => {
        onSelectDestination(dest)
      })

      markersRef.current[dest.id] = marker
    })
  }, [destinations, selectedDestination, onSelectDestination])

  // Pan to selected destination
  useEffect(() => {
    const map = mapInstanceRef.current
    if (!map || !selectedDestination) return

    map.flyTo(selectedDestination.coordinates, 13, {
      duration: 1.2,
      easeLinearity: 0.25,
    })
  }, [selectedDestination])

  return (
    <div className="relative w-full h-full min-h-[420px] rounded-none border border-[#DCDDD2] overflow-hidden">
      <div ref={mapContainerRef} className="w-full h-full min-h-[420px] z-0" />
      {/* Editorial map overlay badge */}
      <div className="absolute top-3 left-3 z-[400] bg-[#F5F2E9]/95 backdrop-blur-xs border border-[#DCDDD2] px-3 py-1.5 text-[11px] text-[#203D32] shadow-xs">
        <span className="font-semibold">Kawasan TN Gunung Ciremai</span>
        <span className="text-[#74604D] block text-[9px] font-mono">
          Leaflet &middot; OpenStreetMap Tiles
        </span>
      </div>
    </div>
  )
}
