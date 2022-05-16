console.log("page loaded...");

function previewVid(vid) {
    vid.play()
    vid.muted = true
}

function stopPreview(vid) {
    vid.pause()
    vid.currentTime = 0
    vid.muted = false
}

function vidPLay(vid) {
    vid.currentTime = 0
    vid.play()
    vid.muted = false
}