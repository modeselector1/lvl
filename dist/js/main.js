$(document).ready(function(){var e=$(".modal"),n=$('[data-toggle="modal"]'),a=$(".modal__close");n.on("click",function(){e.toggleClass("modal--visible")}),a.on("click",function(){$(".modal__form")[0].reset(),$("div.invalid").remove(),$(".modal__form").find(".invalid").removeClass("invalid"),e.toggleClass("modal--visible")}),$(document).on("keydown",function(n){"Escape"==n.code&&($(".modal__form")[0].reset(),$("div.invalid").remove(),$(".modal__form").find(".invalid").removeClass("invalid"),e.removeClass("modal--visible"))}),$(document).on("click",function(n){e.is(n.target)&&($(".modal__form")[0].reset(),$("div.invalid").remove(),$(".modal__form").find(".invalid").removeClass("invalid"),e.removeClass("modal--visible"))});var o=$(".ajax-success");$('[data-toggle="ajax-success-close"]');function t(e){e.target.playVideo()}$(".ajax-success__close").on("click",function(){o.removeClass("ajax-success--visible")}),$(document).on("keydown",function(e){"Escape"==e.code&&o.removeClass("ajax-success--visible")}),$(".video__play-button").on("click",function(){new YT.Player("player",{height:"100%",width:"100%",videoId:"_Qhqb8DrTNA",events:{onReady:t}})});new Swiper(".projects__swiper-container",{loop:!0,spaceBetween:30,pagination:{el:".projects__swiper-pagination",type:"bullets"},navigation:{nextEl:".projects__swiper-button-next",prevEl:".projects__swiper-button-prev"}});var i=$(".projects__swiper-button-next"),r=$(".projects__swiper-button-prev"),s=$(".projects__swiper-pagination");i.css("left",r.width()+17+s.width()+17),s.css("left",r.width()+20),$("#menu-nav, #footer-nav, #hero").on("click","a",function(e){e.preventDefault();var n=$(this).attr("href"),a=$(n).offset().top;$("body,html").animate({scrollTop:a-110},1500)});for(var l=[".modal__form",".footer__form",".control__form"],c=0;c<l.length;c++)d(l[c]);function d(n){$(n).validate({errorClass:"invalid",errorElement:"div",rules:{userName:{required:!0,minlength:2,maxlength:15},userPhone:{required:!0,minlength:18},userEmail:{required:!0,email:!0}},messages:{userName:{required:"Заполните поле",minlength:"Не меньше 2-х букв",maxlength:"Не больше 15-и букв"},userPhone:{required:"Заполните поле",minlength:"Не меньше 10-и цифр"},userEmail:{required:"Заполните поле",email:"Введите корректный email: name@domain.com"}},submitHandler:function(n){$.ajax({type:"POST",url:"send.php",data:$(n).serialize(),success:function(a){$(n)[0].reset(),e.removeClass("modal--visible"),o.addClass("ajax-success--visible")}})}}),$("[type=tel]").mask("+7 (000) 000-00-00"),$("#agree").on("change",function(){$("#agree").prop("checked")?$("#btn-sumbit").attr("disabled",!1):$("#btn-sumbit").attr("disabled",!0)}),$("#agree-footer").on("change",function(){$("#agree-footer").prop("checked")?$("#btn-sumbit-footer").attr("disabled",!1):$("#btn-sumbit-footer").attr("disabled",!0)}),$("#agree-control").on("change",function(){$("#agree-control").prop("checked")?$("#btn-button-control").attr("disabled",!1):$("#btn-button-control").attr("disabled",!0)})}var m=$(".ymap-container").children(".loader"),u=!1;function f(){var e=new ymaps.Map("map-yandex",{center:[55.730138,37.594238],zoom:7,controls:["zoomControl","fullscreenControl"]}),n=new ymaps.Placemark([55.730138,37.594238],{balloonContent:"Здесь может быть ваш адрес"},{iconLayout:"default#imageWithContent",iconImageHref:"img/marker-red.png",iconImageSize:[32,32],iconImageOffset:[-25,-50]});e.geoObjects.add(n),e.behaviors.disable("scrollZoom"),function(e){return new ymaps.vow.Promise(function(n,a){var o=function(e){for(var n in e)if(e.hasOwnProperty(n)&&e[n]instanceof ymaps.layer.tileContainer.CanvasContainer|e[n]instanceof ymaps.layer.tileContainer.DomContainer)return e[n];return null}(e),t=!0;o.tiles.each(function(e,n){e.isReady()||(t=!1)}),t?n():o.events.once("ready",function(){n()})})}(e.layers.get(0).get(0)).then(function(){m.removeClass("is-active")})}var p=function(){$(".ymap-container").mouseenter(function(){var e,n,a;u||(u=!0,m.addClass("is-active"),e="https://api-maps.yandex.ru/2.1/?lang=ru_RU&amp;loadByRequire=1",n=function(){ymaps.load(f)},(a=document.createElement("script")).readyState?a.onreadystatechange=function(){"loaded"!=a.readyState&&"complete"!=a.readyState||(a.onreadystatechange=null,n())}:a.onload=function(){n()},a.src=e,document.getElementsByTagName("head")[0].appendChild(a))})};$(function(){p()})});