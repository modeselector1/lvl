$(document).ready(function () {
  var modal = $('.modal'),
      modalBtn = $('[data-toggle="modal"]'),
      closeBtn = $('.modal__close');

  modalBtn.on('click', function () {
    modal.toggleClass('modal--visible');
  });
  closeBtn.on('click', function () {
    $('.modal__form')[0].reset();
    $('div.invalid').remove();
    $('.modal__form').find('.invalid').removeClass('invalid');
    modal.toggleClass('modal--visible'); 
  });
  $(document).on('keydown', function (event) {
    if (event.code == 'Escape') {
      $('.modal__form')[0].reset();
      $('div.invalid').remove();
      $('.modal__form').find('.invalid').removeClass('invalid');
      modal.removeClass('modal--visible');
    }
  });
  $(document).on('click', function (e) {
    if (modal.is(e.target)){
      $('.modal__form')[0].reset();
      $('div.invalid').remove();
      $('.modal__form').find('.invalid').removeClass('invalid');
      modal.removeClass('modal--visible'); 
    }
  });

  var ajaxSuccessModal = $('.ajax-success'),
      ajaxSuccessModalBtn = $('[data-toggle="ajax-success-close"]'),
      ajaxSuccessModalcloseBtn = $('.ajax-success__close');

      ajaxSuccessModalcloseBtn.on('click', function () {
        ajaxSuccessModal.removeClass('ajax-success--visible');
      });
      $(document).on('keydown', function (event) {
        if (event.code == 'Escape') {
          ajaxSuccessModal.removeClass('ajax-success--visible');
        }
      });

  // ###### YOUTUBE - VIDEO - START ###### //
  var player;
  $('.video__play-button').on('click', function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
      height: '100%',
      width: '100%',
      videoId: '_Qhqb8DrTNA',
      events: {
        'onReady': videoPlay,
      }
    });
  });
  
  function videoPlay(event) {
    event.target.playVideo();
  }
  // ###### YOUTUBE - VIDEO - END ###### //

  // ###### SLIDER 1 START ###### //
  var SwiperProjects = new Swiper ('.projects__swiper-container',  {
    loop: true,
    spaceBetween: 30,
    pagination: {
      el: '.projects__swiper-pagination',
      type: 'bullets'
    },
    navigation: {
      nextEl: '.projects__swiper-button-next',
      prevEl: '.projects__swiper-button-prev',
    },
  });

  var nextProjects = $('.projects__swiper-button-next');
  var prevProjects = $('.projects__swiper-button-prev');
  var bulletsProjects = $('.projects__swiper-pagination');

  nextProjects.css('left', prevProjects.width() + 17 + bulletsProjects.width() + 17);
  bulletsProjects.css('left', prevProjects.width() + 20);
  // ###### SLIDER 1 END ###### //

  

 


  $("#menu-nav, #footer-nav, #hero").on("click","a", function (event) {
    event.preventDefault();
    var id  = $(this).attr('href'),
        top = $(id).offset().top;
    $('body,html').animate({scrollTop: top - 110}, 1500);
  });

  // new WOW().init();

  var formsClass = [
    ".modal__form",
    ".footer__form",
    ".control__form"
  ];

  for (var i = 0; i < formsClass.length; i++) {
    formsValidate(formsClass[i]);
  }

  function formsValidate (form) {
    $(form).validate({
      errorClass: "invalid",
      errorElement: "div",
      rules: {
        userName: {
          required: true,
          minlength: 2,
          maxlength: 15
        },
        userPhone: {
          required: true,
          minlength: 18,
        },
        userEmail: {
          required: true,
          email: true,
        },
      },
      messages: {
        userName: {
          required: "Заполните поле",
          minlength: "Не меньше 2-х букв",
          maxlength: "Не больше 15-и букв"
        },
        userPhone: {
          required: "Заполните поле",
          minlength: "Не меньше 10-и цифр"
        },
        userEmail: {
          required: "Заполните поле",
          email: "Введите корректный email: name@domain.com"
        }
      },
      submitHandler: function(form) {
        $.ajax({
          type: "POST",
          url: "send.php",
          data: $(form).serialize(),
          success: function (response) {
            $(form)[0].reset();
            modal.removeClass('modal--visible');
            ajaxSuccessModal.addClass('ajax-success--visible');
          }
        });
      },
    });

    $('[type=tel]').mask('+7 (000) 000-00-00');

  
    $('#agree').on('change', function(){
    if($('#agree').prop('checked')){
    $('#btn-sumbit').attr('disabled', false);
    }else{
    $('#btn-sumbit').attr('disabled', true);
    }
    });

    $('#agree-footer').on('change', function(){
      if($('#agree-footer').prop('checked')){
      $('#btn-sumbit-footer').attr('disabled', false);
      }else{
      $('#btn-sumbit-footer').attr('disabled', true);
      }
    });

    $('#agree-control').on('change', function(){
      if($('#agree-control').prop('checked')){
      $('#btn-button-control').attr('disabled', false);
      }else{
      $('#btn-button-control').attr('disabled', true);
      }
    });
  
  }





    //Переменная для включения/отключения индикатора загрузки
  var spinner = $('.ymap-container').children('.loader');
  //Переменная для определения была ли хоть раз загружена Яндекс.Карта (чтобы избежать повторной загрузки при наведении)
  var check_if_load = false;
  //Необходимые переменные для того, чтобы задать координаты на Яндекс.Карте
  var myMapTemp, myPlacemarkTemp;
  
  //Функция создания карты сайта и затем вставки ее в блок с идентификатором &#34;map-yandex&#34;
  function init () {
    var myMapTemp = new ymaps.Map("map-yandex", {
      center: [55.730138, 37.594238], // координаты центра на карте
      zoom: 7, // коэффициент приближения карты
      controls: ['zoomControl', 'fullscreenControl'] // выбираем только те функции, которые необходимы при использовании
    });
    var myPlacemarkTemp = new ymaps.Placemark([55.730138, 37.594238], {
        balloonContent: "Здесь может быть ваш адрес",
    }, {
        // Опции.
        // Необходимо указать данный тип макета.
        iconLayout: 'default#imageWithContent',
        // Своё изображение иконки метки.
        iconImageHref: 'img/marker-red.png',
        // Размеры метки.
        iconImageSize: [32, 32],
        // Смещение левого верхнего угла иконки относительно
        // её "ножки" (точки привязки).
        iconImageOffset: [-25, -50],
    });
    myMapTemp.geoObjects.add(myPlacemarkTemp); // помещаем флажок на карту
    myMapTemp.behaviors.disable('scrollZoom');
    // Получаем первый экземпляр коллекции слоев, потом первый слой коллекции
    var layer = myMapTemp.layers.get(0).get(0);
  
    // Решение по callback-у для определения полной загрузки карты
    waitForTilesLoad(layer).then(function() {
      // Скрываем индикатор загрузки после полной загрузки карты
      spinner.removeClass('is-active');
    });
  }
  
  // Функция для определения полной загрузки карты (на самом деле проверяется загрузка тайлов) 
  function waitForTilesLoad(layer) {
    return new ymaps.vow.Promise(function (resolve, reject) {
      var tc = getTileContainer(layer), readyAll = true;
      tc.tiles.each(function (tile, number) {
        if (!tile.isReady()) {
          readyAll = false;
        }
      });
      if (readyAll) {
        resolve();
      } else {
        tc.events.once("ready", function() {
          resolve();
        });
      }
    });
  }
  
  function getTileContainer(layer) {
    for (var k in layer) {
      if (layer.hasOwnProperty(k)) {
        if (
          layer[k] instanceof ymaps.layer.tileContainer.CanvasContainer
          |layer[k] instanceof ymaps.layer.tileContainer.DomContainer
        ) {
          return layer[k];
        }
      }
    }
    return null;
  }
  
  // Функция загрузки API Яндекс.Карт по требованию (в нашем случае при наведении)
  function loadScript(url, callback){
    var script = document.createElement("script");
  
    if (script.readyState){  // IE
      script.onreadystatechange = function(){
        if (script.readyState == "loaded" ||
                script.readyState == "complete"){
          script.onreadystatechange = null;
          callback();
        }
      };
    } else {  // Другие браузеры
      script.onload = function(){
        callback();
      };
    }
  
    script.src = url;
    document.getElementsByTagName("head")[0].appendChild(script);
  }
  
  // Основная функция, которая проверяет когда мы навели на блок с классом &#34;ymap-container&#34;
  var ymap = function() {
    $('.ymap-container').mouseenter(function(){
        if (!check_if_load) { // проверяем первый ли раз загружается Яндекс.Карта, если да, то загружаем
  
        // Чтобы не было повторной загрузки карты, мы изменяем значение переменной
          check_if_load = true; 
  
      // Показываем индикатор загрузки до тех пор, пока карта не загрузится
          spinner.addClass('is-active');
  
      // Загружаем API Яндекс.Карт
          loadScript("https://api-maps.yandex.ru/2.1/?lang=ru_RU&amp;loadByRequire=1", function(){
            // Как только API Яндекс.Карт загрузились, сразу формируем карту и помещаем в блок с идентификатором &#34;map-yandex&#34;
            ymaps.load(init);
          });                
        }
      }
    );  
  };
  
  $(function() {
  
    //Запускаем основную функцию
    ymap();
  
  });
});