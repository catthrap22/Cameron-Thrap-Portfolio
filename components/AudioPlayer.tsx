import {useEffect, useRef, useState} from "react"
import {Pause, Play} from "lucide-react"
import {cn} from "@/lib/utils"

interface AudioPlayerProps {
    src: string
    title: string
    className?: string
}

export function AudioPlayer({src, title, className}: AudioPlayerProps) {
    const [playing, setPlaying] = useState(false)
    const [progress, setProgress] = useState(0)
    const [current, setCurrent] = useState("0:00")
    const [duration, setDuration] = useState("0:00")
    const audioRef = useRef<HTMLAudioElement>(null)

    const fmt = (s: number) => {
        const m = Math.floor(s / 60)
        return `${m}:${String(Math.floor(s % 60)).padStart(2, "0")}`
    }

    useEffect(() => {
        const a = audioRef.current;
        if (!a) return
        const onTime = () => {
            setCurrent(fmt(a.currentTime))
            setProgress((a.currentTime / a.duration) * 100 || 0)
        }
        const onLoad = () => setDuration(fmt(a.duration))
        const onEnd = () => {
            setPlaying(false);
            setProgress(0)
        }
        a.addEventListener("timeupdate", onTime)
        a.addEventListener("loadedmetadata", onLoad)
        a.addEventListener("ended", onEnd)
        return () => {
            a.removeEventListener("timeupdate", onTime)
            a.removeEventListener("loadedmetadata", onLoad)
            a.removeEventListener("ended", onEnd)
        }
    }, [])

    const toggle = () => {
        const a = audioRef.current;
        if (!a) return
        playing ? a.pause() : a.play()
        setPlaying(!playing)
    }

    const seek = (e: React.MouseEvent<HTMLDivElement>) => {
        const a = audioRef.current;
        if (!a) return
        const r = e.currentTarget.getBoundingClientRect()
        a.currentTime = ((e.clientX - r.left) / r.width) * a.duration
    }

    return (
        <div className={cn("flex items-center gap-3 bg-muted rounded-full px-3 py-2.5 cursor-pointer", className)}>
            <audio ref={audioRef} src={src}/>

            <button
                onClick={toggle}
                className="w-13 h-13 rounded-full bg-background border border-border
                    flex items-center justify-center shrink-0 hover:bg-accent transition-colors"
            >
                {playing ?
                    <Pause className="w-6 h-6 fill-foreground stroke-none"/> :
                    <Play className="w-6 h-6 fill-foreground stroke-none ml-0.5"/>
                }
            </button>

            <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-foreground truncate mb-1">
                    {title}
                </p>
                <div className="flex items-center gap-2">
                    <span className="text-xs text-foreground font-medium tabular-nums">
                        {current}
                    </span>
                    <div
                        className="flex-1 h-1.5  bg-[#5CA1F6] rounded-full cursor-pointer"
                        onClick={seek}
                    >
                        <div
                            className="h-full bg-[#0C0E23] rounded-full transition-all"
                            style={{width: `${progress}%`}}
                        />
                    </div>
                    <span className="text-xs text-foreground font-medium tabular-nums">
                        {duration}
                    </span>
                </div>
            </div>
        </div>)
}
