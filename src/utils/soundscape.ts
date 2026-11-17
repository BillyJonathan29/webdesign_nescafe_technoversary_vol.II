// Web Audio API ambient forest soundscape generator
// Generates soft wind rustle and mountain bird chirps directly in browser

class SoundscapeManager {
  private ctx: AudioContext | null = null
  private isPlaying = false
  private gainNode: GainNode | null = null
  private birdTimer: ReturnType<typeof setInterval> | null = null

  public toggle(): boolean {
    if (this.isPlaying) {
      this.stop()
      return false
    } else {
      this.start()
      return true
    }
  }

  public getIsPlaying(): boolean {
    return this.isPlaying
  }

  public start() {
    if (this.isPlaying) return

    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext
      this.ctx = new AudioCtx()
      if (this.ctx.state === 'suspended') {
        this.ctx.resume()
      }

      this.gainNode = this.ctx.createGain()
      this.gainNode.gain.setValueAtTime(0.01, this.ctx.currentTime)
      this.gainNode.gain.exponentialRampToValueAtTime(0.15, this.ctx.currentTime + 1.5)
      this.gainNode.connect(this.ctx.destination)

      // 1. Mountain breeze (filtered pink noise)
      const bufferSize = this.ctx.sampleRate * 2
      const noiseBuffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate)
      const output = noiseBuffer.getChannelData(0)
      let b0 = 0, b1 = 0, b2 = 0, b3 = 0, b4 = 0, b5 = 0, b6 = 0
      for (let i = 0; i < bufferSize; i++) {
        const white = Math.random() * 2 - 1
        b0 = 0.99886 * b0 + white * 0.0555179
        b1 = 0.99332 * b1 + white * 0.0750759
        b2 = 0.96900 * b2 + white * 0.1538520
        b3 = 0.86650 * b3 + white * 0.3104856
        b4 = 0.55000 * b4 + white * 0.5329522
        b5 = -0.7616 * b5 - white * 0.0168980
        output[i] = (b0 + b1 + b2 + b3 + b4 + b5 + b6 + white * 0.5362) * 0.04
        b6 = white * 0.115926
      }

      const whiteNoise = this.ctx.createBufferSource()
      whiteNoise.buffer = noiseBuffer
      whiteNoise.loop = true

      const filter = this.ctx.createBiquadFilter()
      filter.type = 'lowpass'
      filter.frequency.setValueAtTime(320, this.ctx.currentTime)

      whiteNoise.connect(filter)
      filter.connect(this.gainNode)
      whiteNoise.start()

      // 2. Play occasional bird chirps
      const playChirp = () => {
        if (!this.ctx || !this.isPlaying || !this.gainNode) return
        const now = this.ctx.currentTime
        const osc = this.ctx.createOscillator()
        const chirpGain = this.ctx.createGain()

        osc.type = 'sine'
        const baseFreq = 2200 + Math.random() * 800
        osc.frequency.setValueAtTime(baseFreq, now)
        osc.frequency.exponentialRampToValueAtTime(baseFreq + 600, now + 0.08)
        osc.frequency.exponentialRampToValueAtTime(baseFreq - 200, now + 0.18)

        chirpGain.gain.setValueAtTime(0.001, now)
        chirpGain.gain.linearRampToValueAtTime(0.08, now + 0.04)
        chirpGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.22)

        osc.connect(chirpGain)
        chirpGain.connect(this.gainNode)

        osc.start(now)
        osc.stop(now + 0.25)
      }

      // Initial chirp
      setTimeout(playChirp, 600)
      this.birdTimer = setInterval(() => {
        if (Math.random() > 0.3) {
          playChirp()
          if (Math.random() > 0.5) {
            setTimeout(playChirp, 150)
          }
        }
      }, 2500)

      this.isPlaying = true
    } catch {
      this.isPlaying = false
    }
  }

  public stop() {
    if (!this.isPlaying) return

    if (this.birdTimer) {
      clearInterval(this.birdTimer)
      this.birdTimer = null
    }

    if (this.gainNode && this.ctx) {
      try {
        this.gainNode.gain.setValueAtTime(this.gainNode.gain.value, this.ctx.currentTime)
        this.gainNode.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + 0.5)
        setTimeout(() => {
          this.ctx?.close()
          this.ctx = null
          this.gainNode = null
          this.isPlaying = false
        }, 550)
      } catch {
        this.ctx = null
        this.isPlaying = false
      }
    } else {
      this.isPlaying = false
    }
  }
}

export const soundscape = new SoundscapeManager()
