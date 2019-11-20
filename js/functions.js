$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})
$('#example').tooltip(options)
$('.toast').toast(option)

(function ($) {
    "use strict";


$('#myModal').on('shown.bs.modal', function () {
  $('#myInput').trigger('focus')
})
