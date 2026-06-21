var wms_layers = [];


        var lyr_Positron_0 = new ol.layer.Tile({
            'title': 'Positron',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://cartodb.com/basemaps/">Map tiles by CartoDB, under CC BY 3.0. Data by OpenStreetMap, under ODbL.</a>',
                url: 'https://a.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png'
            })
        });
var format_AdministrasiKutaiTimur_1 = new ol.format.GeoJSON();
var features_AdministrasiKutaiTimur_1 = format_AdministrasiKutaiTimur_1.readFeatures(json_AdministrasiKutaiTimur_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AdministrasiKutaiTimur_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AdministrasiKutaiTimur_1.addFeatures(features_AdministrasiKutaiTimur_1);
var lyr_AdministrasiKutaiTimur_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AdministrasiKutaiTimur_1, 
                style: style_AdministrasiKutaiTimur_1,
                popuplayertitle: 'Administrasi Kutai Timur',
                interactive: true,
                title: '<img src="styles/legend/AdministrasiKutaiTimur_1.png" /> Administrasi Kutai Timur'
            });
var lyr_KlasifikasiJenisTanah_2 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Klasifikasi Jenis Tanah<br />\
    <img src="styles/legend/KlasifikasiJenisTanah_2_0.png" /> Tidak Sesuai<br />\
    <img src="styles/legend/KlasifikasiJenisTanah_2_1.png" /> Kurang Sesuai<br />\
    <img src="styles/legend/KlasifikasiJenisTanah_2_2.png" /> Cukup Sesuai<br />\
    <img src="styles/legend/KlasifikasiJenisTanah_2_3.png" /> Sesuai<br />\
    <img src="styles/legend/KlasifikasiJenisTanah_2_4.png" /> Sangat Sesuai<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/KlasifikasiJenisTanah_2.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [12909449.467362, 2511.804372, 13245363.678035, 208123.401170]
        })
    });
var lyr_KlasifikasiJarakkeListrik_3 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Klasifikasi Jarak ke Listrik<br />\
    <img src="styles/legend/KlasifikasiJarakkeListrik_3_0.png" /> Tidak Sesuai<br />\
    <img src="styles/legend/KlasifikasiJarakkeListrik_3_1.png" /> Kurang Sesuai<br />\
    <img src="styles/legend/KlasifikasiJarakkeListrik_3_2.png" /> Cukup Sesuai<br />\
    <img src="styles/legend/KlasifikasiJarakkeListrik_3_3.png" /> Sesuai<br />\
    <img src="styles/legend/KlasifikasiJarakkeListrik_3_4.png" /> Sangat Sesuai<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/KlasifikasiJarakkeListrik_3.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [12909542.322066, 2545.381450, 13245763.615346, 207937.255940]
        })
    });
var lyr_KlasifikasiJarakkeJalan_4 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Klasifikasi Jarak ke Jalan<br />\
    <img src="styles/legend/KlasifikasiJarakkeJalan_4_0.png" /> Tidak Sesuai<br />\
    <img src="styles/legend/KlasifikasiJarakkeJalan_4_1.png" /> Kurang Sesuai<br />\
    <img src="styles/legend/KlasifikasiJarakkeJalan_4_2.png" /> Cukup Sesuai<br />\
    <img src="styles/legend/KlasifikasiJarakkeJalan_4_3.png" /> Sesuai<br />\
    <img src="styles/legend/KlasifikasiJarakkeJalan_4_4.png" /> Sangat Sesuai<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/KlasifikasiJarakkeJalan_4.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [12909502.274724, 2555.874981, 13245820.169574, 207986.205590]
        })
    });
var lyr_KlasifikasiJarakkeSungai_5 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Klasifikasi Jarak ke Sungai<br />\
    <img src="styles/legend/KlasifikasiJarakkeSungai_5_0.png" /> Tidak Sesuai<br />\
    <img src="styles/legend/KlasifikasiJarakkeSungai_5_1.png" /> Kurang Sesuai<br />\
    <img src="styles/legend/KlasifikasiJarakkeSungai_5_2.png" /> Cukup Sesuai<br />\
    <img src="styles/legend/KlasifikasiJarakkeSungai_5_3.png" /> Sesuai<br />\
    <img src="styles/legend/KlasifikasiJarakkeSungai_5_4.png" /> Sangat Sesuai<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/KlasifikasiJarakkeSungai_5.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [12909542.322042, 2545.381436, 13245763.615372, 207937.255957]
        })
    });
var lyr_KlasifikasiJarakkePermukiman_6 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Klasifikasi Jarak ke Permukiman<br />\
    <img src="styles/legend/KlasifikasiJarakkePermukiman_6_0.png" /> Tidak Sesuai<br />\
    <img src="styles/legend/KlasifikasiJarakkePermukiman_6_1.png" /> Kurang Sesuai<br />\
    <img src="styles/legend/KlasifikasiJarakkePermukiman_6_2.png" /> Cukup Sesuai<br />\
    <img src="styles/legend/KlasifikasiJarakkePermukiman_6_3.png" /> Sesuai<br />\
    <img src="styles/legend/KlasifikasiJarakkePermukiman_6_4.png" /> Sangat Sesuai<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/KlasifikasiJarakkePermukiman_6.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [12910274.810404, 2340.901530, 13246707.405836, 207809.951668]
        })
    });
var lyr_KlasifikasiTutupanLahan_7 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Klasifikasi Tutupan Lahan<br />\
    <img src="styles/legend/KlasifikasiTutupanLahan_7_0.png" /> Tidak Sesuai<br />\
    <img src="styles/legend/KlasifikasiTutupanLahan_7_1.png" /> Kurang Sesuai<br />\
    <img src="styles/legend/KlasifikasiTutupanLahan_7_2.png" /> Cukup Sesuai<br />\
    <img src="styles/legend/KlasifikasiTutupanLahan_7_3.png" /> Sesuai<br />\
    <img src="styles/legend/KlasifikasiTutupanLahan_7_4.png" /> Sangat Sesuai<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/KlasifikasiTutupanLahan_7.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [12910323.997957, 2507.727296, 13245596.040328, 207661.699774]
        })
    });
var lyr_KlasifikasiKemiringanlereng_8 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Klasifikasi Kemiringan lereng<br />\
    <img src="styles/legend/KlasifikasiKemiringanlereng_8_0.png" /> Tidak Sesuai<br />\
    <img src="styles/legend/KlasifikasiKemiringanlereng_8_1.png" /> Cukup Sesuai<br />\
    <img src="styles/legend/KlasifikasiKemiringanlereng_8_2.png" /> Sangat Sesuai<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/KlasifikasiKemiringanlereng_8.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [12910369.968042, 2325.858507, 13246866.524812, 207346.080651]
        })
    });
var lyr_KlasifikasiRisikoBanjir_9 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Klasifikasi Risiko Banjir<br />\
    <img src="styles/legend/KlasifikasiRisikoBanjir_9_0.png" /> Tidak Sesuai<br />\
    <img src="styles/legend/KlasifikasiRisikoBanjir_9_1.png" /> Cukup Sesuai<br />\
    <img src="styles/legend/KlasifikasiRisikoBanjir_9_2.png" /> Sangat Sesuai<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/KlasifikasiRisikoBanjir_9.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [12923843.854750, 2521.772737, 13244176.821457, 186960.409169]
        })
    });
var format_WeightedOverlay_10 = new ol.format.GeoJSON();
var features_WeightedOverlay_10 = format_WeightedOverlay_10.readFeatures(json_WeightedOverlay_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WeightedOverlay_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WeightedOverlay_10.addFeatures(features_WeightedOverlay_10);
var lyr_WeightedOverlay_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_WeightedOverlay_10, 
                style: style_WeightedOverlay_10,
                popuplayertitle: 'Weighted Overlay',
                interactive: true,
    title: 'Weighted Overlay<br />\
    <img src="styles/legend/WeightedOverlay_10_0.png" /> Tidak Sesuai<br />\
    <img src="styles/legend/WeightedOverlay_10_1.png" /> Kurang Sesuai<br />\
    <img src="styles/legend/WeightedOverlay_10_2.png" /> Cukup Sesuai<br />\
    <img src="styles/legend/WeightedOverlay_10_3.png" /> Sangat Sesuai<br />' });
var format_WilayahSesuaiPLTBm_11 = new ol.format.GeoJSON();
var features_WilayahSesuaiPLTBm_11 = format_WilayahSesuaiPLTBm_11.readFeatures(json_WilayahSesuaiPLTBm_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WilayahSesuaiPLTBm_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WilayahSesuaiPLTBm_11.addFeatures(features_WilayahSesuaiPLTBm_11);
var lyr_WilayahSesuaiPLTBm_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_WilayahSesuaiPLTBm_11, 
                style: style_WilayahSesuaiPLTBm_11,
                popuplayertitle: 'Wilayah Sesuai PLTBm',
                interactive: true,
    title: 'Wilayah Sesuai PLTBm<br />\
    <img src="styles/legend/WilayahSesuaiPLTBm_11_0.png" /> Cukup Sesuai<br />\
    <img src="styles/legend/WilayahSesuaiPLTBm_11_1.png" /> Sangat Sesuai<br />' });
var format_PKSGOOD_12 = new ol.format.GeoJSON();
var features_PKSGOOD_12 = format_PKSGOOD_12.readFeatures(json_PKSGOOD_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PKSGOOD_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PKSGOOD_12.addFeatures(features_PKSGOOD_12);
var lyr_PKSGOOD_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PKSGOOD_12, 
                style: style_PKSGOOD_12,
                popuplayertitle: 'PKS GOOD',
                interactive: true,
                title: '<img src="styles/legend/PKSGOOD_12.png" /> PKS GOOD'
            });

lyr_Positron_0.setVisible(true);lyr_AdministrasiKutaiTimur_1.setVisible(true);lyr_KlasifikasiJenisTanah_2.setVisible(true);lyr_KlasifikasiJarakkeListrik_3.setVisible(true);lyr_KlasifikasiJarakkeJalan_4.setVisible(true);lyr_KlasifikasiJarakkeSungai_5.setVisible(true);lyr_KlasifikasiJarakkePermukiman_6.setVisible(true);lyr_KlasifikasiTutupanLahan_7.setVisible(true);lyr_KlasifikasiKemiringanlereng_8.setVisible(true);lyr_KlasifikasiRisikoBanjir_9.setVisible(true);lyr_WeightedOverlay_10.setVisible(true);lyr_WilayahSesuaiPLTBm_11.setVisible(true);lyr_PKSGOOD_12.setVisible(true);
var layersList = [lyr_Positron_0,lyr_AdministrasiKutaiTimur_1,lyr_KlasifikasiJenisTanah_2,lyr_KlasifikasiJarakkeListrik_3,lyr_KlasifikasiJarakkeJalan_4,lyr_KlasifikasiJarakkeSungai_5,lyr_KlasifikasiJarakkePermukiman_6,lyr_KlasifikasiTutupanLahan_7,lyr_KlasifikasiKemiringanlereng_8,lyr_KlasifikasiRisikoBanjir_9,lyr_WeightedOverlay_10,lyr_WilayahSesuaiPLTBm_11,lyr_PKSGOOD_12];
lyr_AdministrasiKutaiTimur_1.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'alt_name': 'alt_name', 'place': 'place', 'official_n': 'official_n', 'wikipedia': 'wikipedia', 'wikidata': 'wikidata', 'website': 'website', 'type': 'type', 'timezone': 'timezone', 'source_pop': 'source_pop', 'short_name': 'short_name', 'short_na_1': 'short_na_1', 'ref_ID_kem': 'ref_ID_kem', 'ref': 'ref', 'population': 'population', 'populati_1': 'populati_1', 'name_zh': 'name_zh', 'name_uk': 'name_uk', 'name_su-La': 'name_su-La', 'name_su': 'name_su', 'name_ru': 'name_ru', 'name_pl': 'name_pl', 'name_nl': 'name_nl', 'name_ko': 'name_ko', 'name_ja': 'name_ja', 'name_id': 'name_id', 'name_fr': 'name_fr', 'name_en': 'name_en', 'name_de': 'name_de', 'name_cs': 'name_cs', 'name_br': 'name_br', 'name_ar': 'name_ar', 'name': 'name', 'boundary': 'boundary', 'border_typ': 'border_typ', 'border_t_1': 'border_t_1', 'alt_name_a': 'alt_name_a', 'admin_leve': 'admin_leve', 'ISO3166-2': 'ISO3166-2', });
lyr_WeightedOverlay_10.set('fieldAliases', {'fid': 'fid', 'DN': 'DN', });
lyr_WilayahSesuaiPLTBm_11.set('fieldAliases', {'fid': 'fid', 'DN': 'DN', 'Kesesuaian': 'Kesesuaian', 'Luas (Ha)': 'Luas (Ha)', });
lyr_PKSGOOD_12.set('fieldAliases', {'Nama Pabri': 'Nama Pabri', 'X': 'X', 'Y': 'Y', });
lyr_AdministrasiKutaiTimur_1.set('fieldImages', {'fid': 'TextEdit', 'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'alt_name': 'TextEdit', 'place': 'TextEdit', 'official_n': 'TextEdit', 'wikipedia': 'TextEdit', 'wikidata': 'TextEdit', 'website': 'TextEdit', 'type': 'TextEdit', 'timezone': 'TextEdit', 'source_pop': 'TextEdit', 'short_name': 'TextEdit', 'short_na_1': 'TextEdit', 'ref_ID_kem': 'TextEdit', 'ref': 'TextEdit', 'population': 'TextEdit', 'populati_1': 'TextEdit', 'name_zh': 'TextEdit', 'name_uk': 'TextEdit', 'name_su-La': 'TextEdit', 'name_su': 'TextEdit', 'name_ru': 'TextEdit', 'name_pl': 'TextEdit', 'name_nl': 'TextEdit', 'name_ko': 'TextEdit', 'name_ja': 'TextEdit', 'name_id': 'TextEdit', 'name_fr': 'TextEdit', 'name_en': 'TextEdit', 'name_de': 'TextEdit', 'name_cs': 'TextEdit', 'name_br': 'TextEdit', 'name_ar': 'TextEdit', 'name': 'TextEdit', 'boundary': 'TextEdit', 'border_typ': 'TextEdit', 'border_t_1': 'TextEdit', 'alt_name_a': 'TextEdit', 'admin_leve': 'TextEdit', 'ISO3166-2': 'TextEdit', });
lyr_WeightedOverlay_10.set('fieldImages', {'fid': 'TextEdit', 'DN': 'Range', });
lyr_WilayahSesuaiPLTBm_11.set('fieldImages', {'fid': 'TextEdit', 'DN': 'Range', 'Kesesuaian': 'TextEdit', 'Luas (Ha)': 'TextEdit', });
lyr_PKSGOOD_12.set('fieldImages', {'Nama Pabri': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', });
lyr_AdministrasiKutaiTimur_1.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'alt_name': 'no label', 'place': 'no label', 'official_n': 'no label', 'wikipedia': 'inline label - always visible', 'wikidata': 'no label', 'website': 'no label', 'type': 'no label', 'timezone': 'no label', 'source_pop': 'no label', 'short_name': 'no label', 'short_na_1': 'no label', 'ref_ID_kem': 'no label', 'ref': 'no label', 'population': 'no label', 'populati_1': 'no label', 'name_zh': 'no label', 'name_uk': 'no label', 'name_su-La': 'no label', 'name_su': 'no label', 'name_ru': 'no label', 'name_pl': 'no label', 'name_nl': 'no label', 'name_ko': 'no label', 'name_ja': 'no label', 'name_id': 'no label', 'name_fr': 'no label', 'name_en': 'no label', 'name_de': 'no label', 'name_cs': 'no label', 'name_br': 'no label', 'name_ar': 'no label', 'name': 'no label', 'boundary': 'no label', 'border_typ': 'no label', 'border_t_1': 'no label', 'alt_name_a': 'no label', 'admin_leve': 'no label', 'ISO3166-2': 'no label', });
lyr_WeightedOverlay_10.set('fieldLabels', {'fid': 'inline label - visible with data', 'DN': 'no label', });
lyr_WilayahSesuaiPLTBm_11.set('fieldLabels', {'fid': 'inline label - always visible', 'DN': 'no label', 'Kesesuaian': 'inline label - always visible', 'Luas (Ha)': 'inline label - always visible', });
lyr_PKSGOOD_12.set('fieldLabels', {'Nama Pabri': 'inline label - always visible', 'X': 'no label', 'Y': 'no label', });
lyr_PKSGOOD_12.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});