/**
*   OpenLayers 3 map for EPSG:3067 projection.
*/
function init() {

            //Proj4 is required because OPenLayer 3 does not support EPSG:3067
            //Config from http://epsg.io/3067
            proj4.defs("EPSG:3067","+proj=utm +zone=35 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs");

            //Map limits
            var extent = [50199.4814, 6582464.0358, 761274.6247, 7799839.8902];
            ol.proj.get('EPSG:3067').setExtent(extent);

            var view = new ol.View({
                center: [405644, 7000165], 
                projection: 'EPSG:3067',
                zoom: 2
            });	
	
	
    var map = new ol.Map({

        layers: [
			new ol.layer.Group({
				'title': 'WMS SLD Demo',
				layers: [
                    new ol.layer.Group({
                        'title': 'demo',
                        type: 'base',

                        layers: [

							new ol.layer.Image({
								title: '4000k',
								//extent: extent,
								source: new ol.source.ImageWMS({
									url: 'http://avoindata.maanmittauslaitos.fi/geoserver/ows',
									crossOrigin: 'anonymous',
									params: {
										'SLD': 'http://jventin.github.io/taustakartta_KaPA/taustakartta_sld_160509/taustakartta_4000k.sld',
										'FORMAT': 'image/png'
									},
									serverType: /** @type {ol.source.wms.ServerType} */ ('geoserver')
								}),
								minResolution: 2,
								maxResolution: 8384
							})
						]
					})
				]
			})		
		],
		target: 'map',
		view: view	
    });
	



} 

