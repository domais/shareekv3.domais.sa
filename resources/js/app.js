import axios from 'axios'
import Swal from 'sweetalert2/dist/sweetalert2.js'
import $ from 'jquery'
import Quill from 'quill'
import * as bootstrap from 'bootstrap'
import 'sweetalert2/src/sweetalert2.scss'
import Cropper from 'cropperjs'
import datetimepicker from 'jquery-datetimepicker'
import Dropzone from "dropzone";
import select2 from 'select2';
import flatpickr from "flatpickr";
import { Arabe } from "flatpickr/dist/l10n/ar.js";


select2();


window.Swal = Swal
window.Quill = Quill
window.Cropper = Cropper
window.bootstrap = bootstrap
window.jQuery = window.$ = $
window.axios = axios
window.Dropzone = Dropzone
window.datetimepicker = datetimepicker
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'
window.select2 = select2
window.flatpickr = flatpickr