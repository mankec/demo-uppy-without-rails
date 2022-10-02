import { Uppy, Dashboard, Tus, ImageEditor } from "https://releases.transloadit.com/uppy/v3.0.1/uppy.min.mjs"
var uppy = new Uppy()
  .use(Dashboard, {
    inline: true,
    target: '#drag-drop-area'
  })
  .use(Tus, { endpoint: 'https://tusd.tusdemo.net/files/' })
  .use(ImageEditor, {
    target: Dashboard,
    quality: 0.8,
  })

uppy.on('complete', (result) => {
  console.log('Upload complete! We’ve uploaded these files:', result.successful)
})