"use client"

import {AudioPlayer} from "@/components/AudioPlayer";

export default function AudioPlayerQueueDemo() {
    return (
        <>
            <AudioPlayer src="/src/Demos/AudiobookDemo.mp3" title="Audiobook Demo" />
            <AudioPlayer src="/src/Demos/CommercialCameronThrapDEMO.mp3" title="Comercial Demo" />
        </>
    );
}
