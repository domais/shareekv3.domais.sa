import axios from 'axios'
import Swal from 'sweetalert2/dist/sweetalert2.js'
import $ from 'jquery'
import Quill from 'quill/dist/quill'
import * as bootstrap from 'bootstrap'
import 'sweetalert2/src/sweetalert2.scss'
window.Swal = Swal
window.Quill = Quill
window.$ = $
window.axios = axios
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'