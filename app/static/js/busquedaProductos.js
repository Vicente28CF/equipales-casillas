document.addEventListener('DOMContentLoaded', function () {
    const searchInput = document.getElementById('searchInput');
    const searchIcon = document.querySelector('.bx-search-alt');

    function performSearch() {
        // Obtiene el término de búsqueda del campo de entrada
        const searchTerm = searchInput.value.trim();

        // Verifica si el término de búsqueda no está vacío
        if (searchTerm !== '') {
            // Redirige a la página de resultados
            window.location.href = `/resultados_busqueda?q=${encodeURIComponent(searchTerm)}`;
        }
    }

    // Escucha el evento 'keydown' en el campo de entrada
    searchInput.addEventListener('keydown', function (event) {
        // Verifica si la tecla presionada es Enter (código 13)
        if (event.key === 'Enter') {
            performSearch();
        }
    });

    // Escucha el evento 'click' en el icono de búsqueda
    searchIcon.addEventListener('click', function () {
        performSearch();
    });
});

let products = [
    {
        id: 1,
        name: 'Equipal Texano',
        image1: './static/img/presentacion/Equipales/EquipalTexano/EquipalTexano.jpeg',
        image2: './static/img/presentacion/Equipales/EquipalTexano/EquipalTexanoVista1.jpeg',
        old_price: '$3,000',
        curr_price: '$2,800',
        curr_price2: 2800,
        url: 'https://www.equipalescasillasmx.com/equipal-detail?id=1',
        feature: ['Altura de la superficie del suelo al asiento: 46 cm.',
                  'Altura de la superficie del suelo al borde del resplado: 79 cm.',
                  'Profundidad del asiento: 42 cm.',
                  'Ancho de asiento: 48 cm.',
                  'Ancho brazo a brazo: 65 cm.']
    },
    {
        id: 2,
        name: 'Equipal Cancún',
        image1: './static/img/presentacion/Equipales/EquipalCancun/EquipalCancun.jpeg',
        image2: './static/img/presentacion/Equipales/EquipalCancun/EquipalCancunVista1.jpeg',
        old_price: '$2,000',
        curr_price: '$1,600',
        curr_price2: 1600,
        url: 'https://www.equipalescasillasmx.com/equipal-detail?id=2',
        feature: ['Altura de la superficie del suelo al asiento: 46 cm.',
                  'Altura de la superficie del suelo al borde del resplado: 79 cm.',
                  'Profundidad del asiento: 42 cm.',
                  'Ancho de asiento: 48 cm.',
                  'Ancho brazo a brazo: 65 cm.']
    },
    {
        id: 3,
        name: 'Equipal Acapulco',
        image1: './static/img/presentacion/Equipales/EquipalAcapulco/EquipalAcapulco.jpeg',
        image2: './static/img/presentacion/Equipales/EquipalAcapulco/EquipalAcapulcoVista1.jpeg',
        old_price: '$1,800',
        curr_price: '$1,500',
        curr_price2: 1500,
        url: 'https://www.equipalescasillasmx.com/equipal-detail?id=3',
        feature: ['Altura de la superficie del suelo al asiento: 46 cm.',
                  'Altura de la superficie del suelo al borde del resplado: 79 cm.',
                  'Profundidad del asiento: 42 cm.',
                  'Ancho de asiento: 48 cm.',
                  'Ancho brazo a brazo: 65 cm.']
    },
    {
        id: 4,
        name: 'Equipal Tasiste',
        image1: './static/img/presentacion/Equipales/EquipalTasiste/EquipalTasiste.jpeg',
        image2: './static/img/presentacion/Equipales/EquipalTasiste/EquipalTasisteVista2.jpeg',
        old_price: '$1,800',
        curr_price: '$1,500',
        curr_price2: 1500,
        url: 'https://www.equipalescasillasmx.com/equipal-detail?id=4',
        feature: ['Altura de la superficie del suelo al asiento: 46 cm.',
                  'Altura de la superficie del suelo al borde del resplado: 79 cm.',
                  'Profundidad del asiento: 42 cm.',
                  'Ancho de asiento: 48 cm.',
                  'Ancho brazo a brazo: 65 cm.']
    },
    {
        id: 5,
        name: 'Equipal Tequila',
        image1: './static/img/presentacion/Equipales/EquipalTequila/EquipalTequila.jpeg',
        image2: './static/img/presentacion/Equipales/EquipalTequila/EquipalTequilaVista1.jpeg',
        old_price: '$1,800',
        curr_price: '$1,600',
        curr_price2: 1600,
        url: 'https://www.equipalescasillasmx.com/equipal-detail?id=5',
        feature: 'Mesas de 4 equipales 1 metro de Diametro y altura 75 cm.'
    },
    {
        id: 6,
        name: 'Equipal Tradicional Acojinado',
        image1: './static/img/presentacion/Equipales/EquipalTradicionalAcojinado/EquipalTradicionalAcojinado.jpeg',
        image2: './static/img/presentacion/Equipales/EquipalTradicionalAcojinado/EquipalTradicionalAcojinado.jpeg',
        old_price: '$1,500',
        curr_price: '$1,300',
        curr_price2: 1300,
        url: 'https://www.equipalescasillasmx.com/equipal-detail?id=6',
        feature: ['Altura de la superficie del suelo al asiento: 46 cm.',
                  'Altura de la superficie del suelo al borde del resplado: 79 cm.',
                  'Profundidad del asiento: 42 cm.',
                  'Ancho de asiento: 48 cm.',
                  'Ancho brazo a brazo: 65 cm.']
    },
    {
        id: 7,
        name: 'Equipal Tradicional Acojinado',
        image1: './static/img/presentacion/Equipales/EquipalTradicionalAcojinado/EquipalTradicionalAcojinado2.jpeg',
        image2: './static/img/presentacion/Equipales/EquipalTradicionalAcojinado/EquipalTradicionalAcojinado2.jpeg',
        old_price: '$1,500',
        curr_price: '$1,300',
        curr_price2: 1300,
        url: 'https://www.equipalescasillasmx.com/equipal-detail?id=7',
        feature: ['Altura de la superficie del suelo al asiento: 46 cm.',
                  'Altura de la superficie del suelo al borde del resplado: 79 cm.',
                  'Profundidad del asiento: 42 cm.',
                  'Ancho de asiento: 48 cm.',
                  'Ancho brazo a brazo: 65 cm.']
    },
    {
        id: 8,
        name: 'Equipal Tradicional Acojinado',
        image1: './static/img/presentacion/Equipales/EquipalTradicionalAcojinado/EquipalTradicionalAcojinado3.jpeg',
        image2: './static/img/presentacion/Equipales/EquipalTradicionalAcojinado/EquipalTradicionalAcojinado3.jpeg',
        old_price: '$1,500',
        curr_price: '$1,300',
        curr_price2: 1300,
        url: 'https://www.equipalescasillasmx.com/equipal-detail?id=8',
        feature: ['Altura de la superficie del suelo al asiento: 46 cm.',
                  'Altura de la superficie del suelo al borde del resplado: 79 cm.',
                  'Profundidad del asiento: 42 cm.',
                  'Ancho de asiento: 48 cm.',
                  'Ancho brazo a brazo: 65 cm.']
    },
    {
        id: 9,
        name: 'Equipal Giratorio',
        image1: './static/img/presentacion/Equipales/EquipalGiratorio/EquipalGiratorio.jpeg',
        image2: './static/img/presentacion/Equipales/EquipalGiratorio/EquipalGiratorioVista1.jpeg',
        old_price: '$3,500',
        curr_price: '$3,300',
        curr_price2: 3300,
        url: 'https://www.equipalescasillasmx.com/equipal-detail?id=9',
        feature: 'Solicitar información'
    },
    {
        id: 10,
        name: 'Equipal Para Nino',
        image1: './static/img/presentacion/Equipales/EquipalParaNino/EquipalParaNino.jpeg',
        image2: './static/img/presentacion/Equipales/EquipalParaNino/EquipalParaNino2.jpeg',
        curr_price: '$950.00',
        curr_price2: 950,
        old_price: '',
        url: 'https://www.equipalescasillasmx.com/equipal-detail?id=10',
        feature: ['Altura de la superficie del suelo al asiento: 32 cm.',
        'Altura de la superficie del suelo al borde del resplado: 53 cm.',
        'Profundidad del asiento: 29 1/5 cm.',
        'Ancho de asiento: 35 cm.',
        'Ancho brazo a brazo: 48 cm.']
    },
    {
        id: 11,
        name: 'Equipal Tradicional Sin Acojinar',
        image1: './static/img/presentacion/Equipales/EquipalTradicionalSinAcojinar/EquipalTradicionalSinAcojinar.jpeg',
        image2: './static/img/presentacion/Equipales/EquipalTradicionalSinAcojinar/EquipalTradicionalSinAcojinar2.jpeg',
        old_price: '$1,500',
        curr_price: '$1,200',
        curr_price2: 1200,
        url: 'https://www.equipalescasillasmx.com/equipal-detail?id=11',
        feature: ['Altura de la superficie del suelo al asiento: 46 cm.',
                  'Altura de la superficie del suelo al borde del resplado: 79 cm.',
                  'Profundidad del asiento: 42 cm.',
                  'Ancho de asiento: 48 cm.',
                  'Ancho brazo a brazo: 65 cm.']
    },
    {
        id: 12,
        name: 'Equipal Cocula',
        image1: './static/img/presentacion/Equipales/EquipalCocula/EquipalCocula.jpeg',
        image2: './static/img/presentacion/Equipales/EquipalCocula/EquipalCocula.jpeg',
        old_price: '$2,500',
        curr_price: '$2,300',
        curr_price2: 2300,
        url: 'https://www.equipalescasillasmx.com/equipal-detail?id=12',
        feature: ['Altura de la superficie del suelo al asiento: 46 cm.',
                  'Altura de la superficie del suelo al borde del resplado: 79 cm.',
                  'Profundidad del asiento: 42 cm.',
                  'Ancho de asiento: 48 cm.',
                  'Ancho brazo a brazo: 65 cm.']
    },
    {
        id: 13,
        name: 'Equipal Cocula En Baqueta',
        image1: './static/img/presentacion/Equipales/EquipalCoculaEnBaqueta/EquipalCoculaEnBaqueta.jpeg',
        image2: './static/img/presentacion/Equipales/EquipalCoculaEnBaqueta/EquipalCoculaEnBaqueta.jpeg',
        old_price: '',
        curr_price: '$8,000',
        curr_price2: 8000,
        url: 'https://www.equipalescasillasmx.com/equipal-detail?id=13',
        feature: ['Altura de la superficie del suelo al asiento: 46 cm.',
                  'Altura de la superficie del suelo al borde del resplado: 79 cm.',
                  'Profundidad del asiento: 42 cm.',
                  'Ancho de asiento: 48 cm.',
                  'Ancho brazo a brazo: 65 cm.']
    },
    {
        id: 14,
        name: 'Equipal Talpa',
        image1: './static/img/presentacion/Equipales/EquipalTalpa/EquipalTalpa.jpeg',
        image2: './static/img/presentacion/Equipales/EquipalTalpa/EquipalTalpaVista1.jpeg',
        old_price: '$2,200',
        curr_price: '$2,000',
        curr_price2: 2000,
        url: 'https://www.equipalescasillasmx.com/equipal-detail?id=14',
        feature: ['Altura de la superficie del suelo al asiento: 46 cm.',
                  'Altura de la superficie del suelo al borde del resplado: 79 cm.',
                  'Profundidad del asiento: 42 cm.',
                  'Ancho de asiento: 48 cm.',
                  'Ancho brazo a brazo: 65 cm.']
    },
    {
        id: 15,
        name: 'Silla Equipal',
        image1: './static/img/presentacion/Equipales/SillaEquipal/SillaEquipal.jpeg',
        image2: './static/img/presentacion/Equipales/SillaEquipal/SillaEquipalVista.jpeg',
        old_price: '',
        curr_price: '$900.00',
        curr_price2: 900,
        url: 'https://www.equipalescasillasmx.com/equipal-detail?id=15',
        feature: 'Solicitar Información'
    },
    {
        id: 16,
        name: 'Equipal Charro',
        image1: './static/img/presentacion/Equipales/EquipalCharro/EquipalCharro.jpeg',
        image2: './static/img/presentacion/Equipales/EquipalCharro/EquipalCharroVista.jpeg',
        old_price: '$1,800',
        curr_price: '$1,500',
        curr_price2: 1500,
        url: 'https://www.equipalescasillasmx.com/equipal-detail?id=16',
        feature: ['Altura de la superficie del suelo al asiento: 46 cm.',
                  'Altura de la superficie del suelo al borde del resplado: 79 cm.',
                  'Profundidad del asiento: 42 cm.',
                  'Ancho de asiento: 48 cm.',
                  'Ancho brazo a brazo: 65 cm.']
    },
    {
        id: 17,
        name: 'Mesedora Cocula',
        image1: './static/img/presentacion/Equipales/MesedoraCocula/MesedoraCocula.jpeg',
        image2: './static/img/presentacion/Equipales/MesedoraCocula/MesedoraCoculaVista.jpeg',
        old_price: '',
        curr_price: '$3,600',
        curr_price2: 3600,
        url: 'https://www.equipalescasillasmx.com/equipal-detail?id=17',
        feature: 'Pedir información'
    },
    {
        id: 18,
        name: 'Equipal Chiapas',
        image1: './static/img/presentacion/Equipales/EquipalChiapas/EquipalChiapas.jpeg',
        image2: './static/img/presentacion/Equipales/EquipalChiapas/EquipalChiapas.jpeg',
        old_price: '',
        curr_price: '$3,000',
        curr_price2: 3000,
        url: 'https://www.equipalescasillasmx.com/equipal-detail?id=18',
        feature: 'Pedir Información'
    },
    {
      id: 19,
      name: 'Serví Café #19',
      image1: './static/img/presentacion/Equipales/ServiCafe19/ServiCafe19.jpeg',
      image2: './static/img/presentacion/Equipales/ServiCafe19/ServiCafe19.jpeg',
      old_price: '$4,800',
      curr_price: '$4,600',
      curr_price2: 4600,
      url: 'https://www.equipalescasillasmx.com/equipal-detail?id=19',
      feature: ['Altura de la superficie del suelo al asiento: 95 cm.',
                  'Altura de la superficie del suelo al borde del resplado: 79 cm.',
                  'Profundidad del asiento: 52 cm.',
                  'Ancho de asiento: 52 cm.',
                  'Ancho brazo a brazo: 74 cm.']
    },
    {
      id: 20,
      name: 'Serví Cancun',
      image1: './static/img/presentacion/Equipales/ServiCancun/ServiCancun.jpeg',
      image2: './static/img/presentacion/Equipales/ServiCancun/ServiCancun.jpeg',
      old_price: '',
      curr_price: '$4,400',
      curr_price2: 4400,
      url: 'https://www.equipalescasillasmx.com/equipal-detail?id=20',
      feature: 'Pedir Información'
    },
    {
      id: 21,
      name: 'Equipal Acapulco Con Rinonera',
      image1: './static/img/presentacion/Equipales/EquipalAcapulcoConRinonera/EquipalAcapulcoConRinonera.jpeg',
      image2: './static/img/presentacion/Equipales/EquipalAcapulcoConRinonera/EquipalAcapulcoConRinoneraVista1.jpeg',
      old_price: '$2,200',
      curr_price: '$2,000',
      curr_price2: 2000,
      url: 'https://www.equipalescasillasmx.com/equipal-detail?id=21',
      feature: 'Pedir Información'
    },
    {
      id: 22,
      name: 'Equipal #19',
      image1: './static/img/presentacion/Equipales/Equipal19/Equipal19.jpeg',
      image2: './static/img/presentacion/Equipales/Equipal19/Equipal19Vista1.jpeg',
      old_price: '$2,000',
      curr_price: '$1,900',
      curr_price2: 1900,
      url: 'https://www.equipalescasillasmx.com/equipal-detail?id=22',
      feature: 'Pedir Información'
    },
    {
        id: 42,
        name: 'Banco Cantinero',
        image1: './static/img/presentacion/BarrasPeriqueras/BancoCantinero.jpeg',
        image2: './static/img/presentacion/BarrasPeriqueras/BancoCantineroVista1.jpeg',
        old_price: '$4,000',
        curr_price: '$3,800',
        curr_price2: 3800,
        url: 'https://www.equipalescasillasmx.com/barras-detail?id=42',
        feature: ['Banco Cantinero en Piel de Vaqueta con Pelo']
    },
    {
        id: 30,
        name: 'Comedor Tradicional Acojinado',
        image1: './static/img/presentacion/Comedores/ComedorTradicionalAcojinado.jpeg',
        image2: './static/img/presentacion/Comedores/ComedorTradicionalAcojinado.jpeg',
        old_price: '$7,000',
        curr_price: '$6,600',
        curr_price2: 6600,
        url: 'https://www.equipalescasillasmx.com/product-detail?id=30',
        feature: 'Mesas de 4 equipales 1 metro de Diametro y altura 75 cm.'
      },
      {
        id: 31,
        name: 'Comedor Tasiste',
        image1: './static/img/presentacion/Comedores/ComedorTasiste.jpeg',
        image2: './static/img/presentacion/Comedores/ComedorTasiste.jpeg',
        old_price: '$7,000',
        curr_price: '$6,800',
        curr_price2: 6800,
        url: 'https://www.equipalescasillasmx.com/product-detail?id=31',
        feature: 'Mesas de 4 equipales 1 metro de Diametro y altura 75 cm.'
      },
      {
        id: 32,
        name: 'Comedor 19',
        image1: './static/img/presentacion/Comedores/Comedor19.jpeg',
        image2: './static/img/presentacion/Comedores/Comedor19.jpeg',
        old_price: '$10,000',
        curr_price: '$9,500',
        curr_price2: 9500,
        url: 'https://www.equipalescasillasmx.com/product-detail?id=32',
        feature: 'Mesas de 4 equipales 1 metro de Diametro y altura 75 cm.'
      },
      {
        id: 33,
        name: 'Comedor de Ninos',
        image1: './static/img/presentacion/Comedores/ComedorDeNinos.jpeg',
        image2: './static/img/presentacion/Comedores/ComedorDeNinos.jpeg',
        curr_price: '$4,000',
        curr_price2: 4000,
        url: 'https://www.equipalescasillasmx.com/product-detail?id=33',
        feature: '######'
      },
      {
        id: 34,
        name: 'Comedor Tradicional Acojinado',
        image1: './static/img/presentacion/Comedores/ComedorTradicionalAcojinado2.jpeg',
        image2: './static/img/presentacion/Comedores/ComedorTradicionalAcojinado2.jpeg',
        old_price: '$7,000',
        curr_price: '$6,800',
        curr_price2: 6800,
        url: 'https://www.equipalescasillasmx.com/product-detail?id=34',
        feature: 'Mesas de 4 equipales 1 metro de Diametro y altura 75 cm.'
      },
      {
        id: 35,
        name: 'Comedor 19',
        image1: './static/img/presentacion/Comedores/Comedor19_2.jpeg',
        image2: './static/img/presentacion/Comedores/Comedor19_2.jpeg',
        old_price: '$17,000',
        curr_price: '$16,800',
        curr_price2: 16800,
        url: 'https://www.equipalescasillasmx.com/product-detail?id=35',
        feature: '#####'
      },
      {
        id: 36,
        name: 'Comedor Texano',
        image1: './static/img/presentacion/Comedores/ComedorTexano.jpeg',
        image2: './static/img/presentacion/Comedores/ComedorTexano.jpeg',
        old_price: '$15,000',
        curr_price: '$14,800',
        curr_price2: 14800,
        url: 'https://www.equipalescasillasmx.com/product-detail?id=36',
        feature: 'Mesas de 4 equipales 1 metro de Diametro y altura 75 cm.'
      },
      {
        id: 37,
        name: 'Comedor Talpa con Mesa en Flor y Tasiste',
        image1: './static/img/presentacion/Comedores/ComedorTalpaConMesaFlorYTasiste.jpeg',
        image2: './static/img/presentacion/Comedores/ComedorTalpaConMesaFlorYTasiste.jpeg',
        curr_price: '$10,800',
        curr_price2: 10800,
        url: 'https://www.equipalescasillasmx.com/product-detail?id=37',
        feature: 'Mesas de 4 equipales 1 metro de Diametro y altura 75 cm.'
      },
      {
        id: 38,
        name: 'Comedor Tradicional Acojinado de 10 Equipales',
        image1: './static/img/presentacion/Comedores/ComedorTradicionalAcojinado10Equipales.jpeg',
        image2: './static/img/presentacion/Comedores/ComedorTradicionalAcojinado10Equipales.jpeg',
        old_price: '$24,500',
        curr_price: '$23,900',
        curr_price2: 23900,
        url: 'https://www.equipalescasillasmx.com/product-detail?id=38',
        feature: '#######'
      },
      {
        id: 39,
        name: 'Comedor de Equipales #19 Pintado Chiapaneco',
        image1: './static/img/presentacion/Comedores/ComedorDeEquipales19PintadoChiapaneco.jpeg',
        image2: './static/img/presentacion/Comedores/ComedorDeEquipales19PintadoChiapaneco.jpeg',
        curr_price: '$10,800',
        curr_price2: 10800,
        url: 'https://www.equipalescasillasmx.com/product-detail?id=39',
        feature: 'Mesas de 4 equipales 1 metro de Diametro y altura 75 cm.'
      },
      {
        id: 40,
        name: 'Comedor Acapulco',
        image1: './static/img/presentacion/Comedores/ComedorAcapulco.jpeg',
        image2: './static/img/presentacion/Comedores/ComedorAcapulco.jpeg',
        old_price: '$7,500',
        curr_price: '$7,200',
        curr_price2: 7200,
        url: 'https://www.equipalescasillasmx.com/product-detail?id=40',
        feature: 'Mesas de 4 equipales 1 metro de Diametro y altura 75 cm.'
      },
      {
          id: 41,
          name: 'Comedor Chapala',
          image1: './static/img/presentacion/Comedores/ComedorChapala.jpeg',
          image2: './static/img/presentacion/Comedores/ComedorChapalaVista1.jpeg',
          old_price: '$8,700',
          curr_price: '$8,500',
          curr_price2: 8500,
          url: 'https://www.equipalescasillasmx.com/product-detail?id=41',
          feature: 'Mesas de 4 equipales 1 metro de Diametro y altura 75 cm.'
        },
        {
            id: 43,
            name: 'Promoción',
            image1: './static/img/presentacion/Promociones/primerPromo.jpeg',
            image2: './static/img/presentacion/Promociones/primerPromo.jpeg',
            old_price: '$70,200',
            curr_price: '$69,000',
            curr_price2: 69000,
            url: 'https://www.equipalescasillasmx.com/promocion-detail?id=43',
            feature: ['Altura de la superficie del suelo al asiento: 46 cm.',
                      'Altura de la superficie del suelo al borde del resplado: 79 cm.',
                      'Profundidad del asiento: 42 cm.',
                      'Ancho de asiento: 48 cm.',
                      'Ancho brazo a brazo: 65 cm.']
        },
        {
            id: 23,
            name: 'Sala Zapopan',
            image1: './static/img/presentacion/Salas/SalaZapopan.jpeg',
            image2: './static/img/presentacion/Salas/SalaZapopan.jpeg',
            old_price: '$23,000',
            curr_price: '$22,800',
            curr_price2: 22800, /*Modificique esto para actuailzara precio */
            url: 'https://www.equipalescasillasmx.com/sala-detail?id=23',
            feature: ['Altura de la superficie del suelo al borde del respaldo: 86 cm.',
                      'Profundidad del asiento: 56 cm.',
                      'Ancho de asiento: 152 cm.',
                      'Ancho de Brazo a brazo: 180 cm.'],
            feature2: ['Altura de la superficie del suelo al borde del respaldo: 86 cm.',
                      'Profundidad de asiento: 52 cm.',
                      'Ancho de asiento: 68 cm.',
                      'Ancho de Brazo a brazo: 93 cm.',
                      'Altura de la superficie del suelo al Asiento: 46 cm cm.'],
            feature3: ['Altura de la superficie del suelo al borde del respaldo: 86 cm.',
                      'Profundidad de asiento: 56 cm.',
                      'Ancho de asiento: 116 cm.',
                      'Ancho de Brazo a brazo: 138 cm.']


          },
          {
            id: 24,
            name: 'Sala Cocula en Baqueta',
            image1: './static/img/presentacion/Salas/SalaCocula.jpeg',
            image2: './static/img/presentacion/Salas/SalaCocula.jpeg',
            curr_price: '$26,000',
            curr_price2: 26000,
            url: 'https://www.equipalescasillasmx.com/sala-detail?id=24',
            feature: ['Altura de la superficie del suelo al borde del respaldo: 86 cm.',
                      'Profundidad del asiento: 56 cm.',
                      'Ancho de asiento: 152 cm.',
                      'Ancho de Brazo a brazo: 180 cm.'],
            feature2: ['Altura de la superficie del suelo al borde del respaldo: 86 cm.',
                      'Profundidad de asiento: 52 cm.',
                      'Ancho de asiento: 68 cm.',
                      'Ancho de Brazo a brazo: 93 cm.',
                      'Altura de la superficie del suelo al Asiento: 46 cm cm.'],
            feature3: ['Altura de la superficie del suelo al borde del respaldo: 86 cm.',
                      'Profundidad de asiento: 56 cm.',
                      'Ancho de asiento: 116 cm.',
                      'Ancho de Brazo a brazo: 138 cm.']
          },
          {
            id: 25,
            name: 'Sala Sayula',
            image1: './static/img/presentacion/Salas/SalaSayula.jpeg',
            image2: './static/img/presentacion/Salas/SalaSayula.jpeg',
            old_price: '$15,800',
            curr_price: '$15,600',
            curr_price2: 15600,
            url: 'https://www.equipalescasillasmx.com/sala-detail?id=25',
            feature: ['Altura de la superficie del suelo al borde del respaldo: 86 cm.',
                      'Profundidad del asiento: 56 cm.',
                      'Ancho de asiento: 152 cm.',
                      'Ancho de Brazo a brazo: 180 cm.'],
            feature2: ['Altura de la superficie del suelo al borde del respaldo: 86 cm.',
                      'Profundidad de asiento: 52 cm.',
                      'Ancho de asiento: 68 cm.',
                      'Ancho de Brazo a brazo: 93 cm.',
                      'Altura de la superficie del suelo al Asiento: 46 cm cm.'],
            feature3: ['Altura de la superficie del suelo al borde del respaldo: 86 cm.',
                      'Profundidad de asiento: 56 cm.',
                      'Ancho de asiento: 116 cm.',
                      'Ancho de Brazo a brazo: 138 cm.']
          },
          {
            id: 26,
            name: 'Sala Tradicional',
            image1: './static/img/presentacion/Salas/SalaTradicional.jpeg',
            image2: './static/img/presentacion/Salas/SalaTradicional.jpeg',
            old_price: '$13,000',
            curr_price: '$12,900',
            curr_price2: 12900,
            url: 'https://www.equipalescasillasmx.com/sala-detail?id=26',
            feature: ['Altura de la superficie del suelo al borde del respaldo: 86 cm.',
                      'Profundidad del asiento: 56 cm.',
                      'Ancho de asiento: 152 cm.',
                      'Ancho de Brazo a brazo: 180 cm.'],
            feature2: ['Altura de la superficie del suelo al borde del respaldo: 86 cm.',
                      'Profundidad de asiento: 52 cm.',
                      'Ancho de asiento: 68 cm.',
                      'Ancho de Brazo a brazo: 93 cm.',
                      'Altura de la superficie del suelo al Asiento: 46 cm cm.'],
            feature3: ['Altura de la superficie del suelo al borde del respaldo: 86 cm.',
                      'Profundidad de asiento: 56 cm.',
                      'Ancho de asiento: 116 cm.',
                      'Ancho de Brazo a brazo: 138 cm.']
          },
          {
            id: 27,
            name: 'Sala Tapalpa Texana',
            image1: './static/img/presentacion/Salas/SalaTapalpaTexana.jpeg',
            image2: './static/img/presentacion/Salas/SalaTapalpaTexana.jpeg',
            old_price: '$32,800',
            curr_price: '$32,600',
            curr_price2: 32600,
            url: 'https://www.equipalescasillasmx.com/sala-detail?id=27',
            feature: ['Altura de la superficie del suelo al borde del respaldo: 86 cm.',
                      'Profundidad del asiento: 56 cm.',
                      'Ancho de asiento: 152 cm.',
                      'Ancho de Brazo a brazo: 180 cm.'],
            feature2: ['Altura de la superficie del suelo al borde del respaldo: 86 cm.',
                      'Profundidad de asiento: 52 cm.',
                      'Ancho de asiento: 68 cm.',
                      'Ancho de Brazo a brazo: 93 cm.',
                      'Altura de la superficie del suelo al Asiento: 46 cm cm.'],
            feature3: ['Altura de la superficie del suelo al borde del respaldo: 86 cm.',
                      'Profundidad de asiento: 56 cm.',
                      'Ancho de asiento: 116 cm.',
                      'Ancho de Brazo a brazo: 138 cm.']
          },
          {
            id: 28,
            name: 'Sala Tradicional Junior',
            image1: './static/img/presentacion/Salas/SalaTradicionalJunior.jpeg',
            image2: './static/img/presentacion/Salas/SalaTradicionalJunior.jpeg',
            old_price: '$9,000',
            curr_price: '$8,900',
            curr_price2: 8900,
            url: 'https://www.equipalescasillasmx.com/sala-detail?id=28',
            feature: ['Altura de la superficie del suelo al borde del respaldo: 86 cm.',
                      'Profundidad del asiento: 56 cm.',
                      'Ancho de asiento: 152 cm.',
                      'Ancho de Brazo a brazo: 180 cm.'],
            feature2: ['Altura de la superficie del suelo al borde del respaldo: 86 cm.',
                      'Profundidad de asiento: 52 cm.',
                      'Ancho de asiento: 68 cm.',
                      'Ancho de Brazo a brazo: 93 cm.',
                      'Altura de la superficie del suelo al Asiento: 46 cm cm.'],
            feature3: ['Altura de la superficie del suelo al borde del respaldo: 86 cm.',
                      'Profundidad de asiento: 56 cm.',
                      'Ancho de asiento: 116 cm.',
                      'Ancho de Brazo a brazo: 138 cm.']
          },
          {
              id: 29,
              name: 'Sofá Abanico',
              image1: './static/img/presentacion/Salas/SofaAbanico.jpeg',
              image2: './static/img/presentacion/Salas/SofaAbanico.jpeg',
              old_price: '',
              curr_price: '$12,000',
              curr_price2: 12000,
              url: 'https://www.equipalescasillasmx.com/sala-detail?id=29',
              feature: ['Sofá con el asiento en Vaqueta y respaldo en Piel de cerdo, mide 2 met. 20 cent.'],
              feature2: [],
              feature3: []
            },
    ];

    // Función para realizar la búsqueda en los productos
    function searchInProducts(query) {
        query = query.toLowerCase();
        return products.filter(product => product.name.toLowerCase().includes(query));
    }

    document.addEventListener('DOMContentLoaded', function () {
        const resultadosContainer = document.getElementById('resultados-busqueda');

        // Obtén el término de búsqueda de la URL
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        const searchTerm = urlParams.get('q');

        if (searchTerm) {
            // Si hay un término de búsqueda, realiza la búsqueda y muestra los resultados
            const searchResults = searchInProducts(searchTerm);
            displaySearchResults(searchResults);
        } else {
            // Si no hay término de búsqueda, muestra un mensaje predeterminado
            resultadosContainer.innerHTML = "<p>Realiza una búsqueda para ver los resultados.</p>";
        }
    });

    // Función para mostrar los resultados de la búsqueda
    function displaySearchResults(results) {
        const resultadosContainer = document.getElementById('resultados-busqueda');
        resultadosContainer.innerHTML = `<h2>Resultados para "${getSearchTerm()}":</h2>`;

        if (results.length === 0) {
            resultadosContainer.innerHTML += "<p>No se encontraron resultados.</p>";
        } else {
            results.forEach(product => {
                resultadosContainer.innerHTML += `
                    <div class="product">
                        <h3>${product.name}</h3>
                        <img src="${product.image1}" alt="${product.name}">
                        <p>Precio: ${product.curr_price}</p>
                        <button class="ver-detalles" data-product-url="${product.url}">Ver detalles</button>
                        <!-- Agrega más información si es necesario -->
                    </div>
                `;
            });
        }
    }

    document.addEventListener('click', function (event) {
        if (event.target.classList.contains('ver-detalles')) {
            const productUrl = event.target.dataset.productUrl;
            window.location.href = productUrl;
        }
    });


    // Función para obtener el término de búsqueda de la URL
    function getSearchTerm() {
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        return urlParams.get('q') || '';
    }
