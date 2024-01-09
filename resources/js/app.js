import axios from 'axios'
import Swal from 'sweetalert2/dist/sweetalert2.js'
import $ from 'jquery'
import Quill from 'quill'
import * as bootstrap from 'bootstrap'
import 'sweetalert2/src/sweetalert2.scss'
import Cropper from 'cropperjs'
import datetimepicker from 'jquery-datetimepicker'

window.Swal = Swal
window.Quill = Quill
window.Cropper = Cropper
window.bootstrap = bootstrap
window.jQuery = window.$ = $
window.axios = axios
window.datetimepicker = datetimepicker
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'