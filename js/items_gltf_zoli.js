$(document).ready(function() {
	var items = [
		{
		  "name": "1rugs_w150_h1.5_d250_936KB.gltf",
		  "model": "models/gltf_zoli/1rugs_w150_h1.5_d250_936KB.gltf",
		  "type": "8",
		  "image": "models/thumbnails_gltf_zoli/1rugs_w150_h1.5_d250_936KB.png",
		  "format": "gltf"
		},
		{
		  "name": "2picture_w100_h60_d3_1.45MB.gltf",
		  "model": "models/gltf_zoli/2picture_w100_h60_d3_1.45MB.gltf",
		  "type": "2",
		  "image": "models/thumbnails_gltf_zoli/2picture_w100_h60_d3_1.45MB.png",
		  "format": "gltf"
		},
		{
		  "name": "3picture_w150_h120_d5_5.83MB.gltf",
		  "model": "models/gltf_zoli/3picture_w150_h120_d5_5.83MB.gltf",
		  "type": "2",
		  "image": "models/thumbnails_gltf_zoli/3picture_w150_h120_d5_5.83MB.png",
		  "format": "gltf"
		},
		{
		  "name": "4picture_w120_h65_d5_5.78MB.gltf",
		  "model": "models/gltf_zoli/4picture_w120_h65_d5_5.78MB.gltf",
		  "type": "2",
		  "image": "models/thumbnails_gltf_zoli/4picture_w120_h65_d5_5.78MB.png",
		  "format": "gltf"
		},
		{
		  "name": "5picture_w40_h30_d2_4.02MB.gltf",
		  "model": "models/gltf_zoli/5picture_w40_h30_d2_4.02MB.gltf",
		  "type": "2",
		  "image": "models/thumbnails_gltf_zoli/5picture_w40_h30_d2_4.02MB.png",
		  "format": "gltf"
		},
		{
		  "name": "6living_w400_h180_d42_670KB.gltf",
		  "model": "models/gltf_zoli/6living_w400_h180_d42_670KB.gltf",
		  "type": "9",
		  "image": "models/thumbnails_gltf_zoli/6living_w400_h180_d42_670KB.png",
		  "format": "gltf"
		},
		{
		  "name": "7living_w200_h70_d42_6.14MB.gltf",
		  "model": "models/gltf_zoli/7living_w200_h70_d42_6.14MB.gltf",
		  "type": "1",
		  "image": "models/thumbnails_gltf_zoli/7living_w200_h70_d42_6.14MB.png",
		  "format": "gltf"
		},
		{
		  "name": "8lamp_w100_h50_d35_703KB.gltf",
		  "model": "models/gltf_zoli/8lamp_w100_h50_d35_703KB.gltf",
		  "type": "4",
		  "image": "models/thumbnails_gltf_zoli/8lamp_w100_h50_d35_703KB.png",
		  "format": "gltf"
		},
		{
		  "name": "9lamp_w14_h20_d30_741KB.gltf",
		  "model": "models/gltf_zoli/9lamp_w14_h20_d30_741KB.gltf",
		  "type": "2",
		  "image": "models/thumbnails_gltf_zoli/9lamp_w14_h20_d30_741KB.png",
		  "format": "gltf"
		},
		{
		  "name": "10sofa_w240_h90_d85_6.08MB.gltf",
		  "model": "models/gltf_zoli/10sofa_w240_h90_d85_6.08MB.gltf",
		  "type": "1",
		  "image": "models/thumbnails_gltf_zoli/10sofa_w240_h90_d85_6.08MB.png",
		  "format": "gltf"
		},
		{
		  "name": "12sofa_w350_h76_d152_699KB.gltf",
		  "model": "models/gltf_zoli/12sofa_w350_h76_d152_699KB.gltf",
		  "type": "1",
		  "image": "models/thumbnails_gltf_zoli/12sofa_w350_h76_d152_699KB.png",
		  "format": "gltf"
		},
		{
		  "name": "13sofa_w120_h110_d80_577KB.gltf",
		  "model": "models/gltf_zoli/13sofa_w120_h110_d80_577KB.gltf",
		  "type": "1",
		  "image": "models/thumbnails_gltf_zoli/13sofa_w120_h110_d80_577KB.png",
		  "format": "gltf"
		},
		{
		  "name": "14sofa_w100_h115_d84_1.64MB.gltf",
		  "model": "models/gltf_zoli/14sofa_w100_h115_d84_1.64MB.gltf",
		  "type": "1",
		  "image": "models/thumbnails_gltf_zoli/14sofa_w100_h115_d84_1.64MB.png",
		  "format": "gltf"
		},
		{
		  "name": "15sofa_w100_h100_d100_2.13MB.gltf",
		  "model": "models/gltf_zoli/15sofa_w100_h100_d100_2.13MB.gltf",
		  "type": "1",
		  "image": "models/thumbnails_gltf_zoli/15sofa_w100_h100_d100_2.13MB.png",
		  "format": "gltf"
		},
		{
		  "name": "16sofa_w64_h88_d64_1.25MB.gltf",
		  "model": "models/gltf_zoli/16sofa_w64_h88_d64_1.25MB.gltf",
		  "type": "1",
		  "image": "models/thumbnails_gltf_zoli/16sofa_w64_h88_d64_1.25MB.png",
		  "format": "gltf"
		},
		{
		  "name": "17sofa_w64_h88_d100_3.61MB.gltf",
		  "model": "models/gltf_zoli/17sofa_w64_h88_d100_3.61MB.gltf",
		  "type": "1",
		  "image": "models/thumbnails_gltf_zoli/17sofa_w64_h88_d100_3.61MB.png",
		  "format": "gltf"
		}
	  ];
var modelTypesNum = ["1","2","3","7","8","9","4"];

var modelTypesIds = ["floor-items", "wall-items", "in-wall-items", "in-wall-floor-items", "on-floor-items", "wall-floor-items", "roof-items"];

var itemsDiv = $("#items-wrapper");

for (var i = 0; i < items.length; i++) 

{

	var item = items[i];

	itemsDiv = $("#"+modelTypesIds[modelTypesNum.indexOf(item.type)]+"-wrapper");

	var modelformat = (item.format) ?' model-format="'+item.format+'"' : "";

	var html = '<div class="col-sm-4">' + '<a class="thumbnail add-item"' +' model-meta=\''+ JSON.stringify(item.meta || {}) +'\' model-name="'+ item.name +'"' +' model-url="' +item.model+'"' +' model-type="' +item.type+'"' + modelformat+'>'+'<img src="'+item.image +'" alt="Add Item"   data-dismiss="modal" 	> '+item.name +'</a></div>';

	itemsDiv.append(html);

}
});