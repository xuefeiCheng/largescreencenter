/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/
//import echarts from 'echarts'
//let echarts = require('echarts/lib/echarts')
(function (root, factory) {
   
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['exports', 'echarts'], factory);
    } else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {
        // CommonJS
        factory(exports, require('echarts'));
    } else {
        // Browser globals
        factory({}, root.echarts);
    }
}(this, function (exports, echarts) {
    var log = function (msg) {
        if (typeof console !== 'undefined') {
            console && console.error && console.error(msg);
        }
    }
    if (!echarts) {
        log('ECharts is not Loaded');
        return;
    }
    if (!echarts.registerMap) {
        log('ECharts Map is not loaded')
        return;
    }
    echarts.registerMap("武汉",{"type": "FeatureCollection", "features": [{"type":"Feature","properties":{"name":"汉南区"},"geometry":{"type":"MultiPolygon","coordinates":[[[[114.09009890625,30.3486452460938],[114.107345,30.343843],[114.095513945313,30.3156740546875],[114.076954375,30.2433571601563],[114.053260527344,30.2279274726563],[114.037345,30.223843],[114.031429472656,30.2279274726563],[114.00451296875,30.2750856757813],[113.964525175781,30.3026955390626],[113.916331816406,30.291889875],[113.861678496094,30.2107277656251],[113.857345,30.193843],[113.843985625,30.187202375],[113.817345,30.183843],[113.813260527344,30.1997585273438],[113.764371367188,30.2180519843751],[113.746261015625,30.2458669257813],[113.777345,30.2538430000001],[113.81298953125,30.2681984687501],[113.832345,30.2798757148438],[113.857471953125,30.2647194648438],[113.87170046875,30.29948753125],[113.891624785156,30.3148635078126],[113.908482695313,30.3560549140625],[113.947345,30.3617995429687],[113.977345,30.3573659492188],[113.992857695313,30.3596584296875],[114.002110625,30.3476686835938],[114.024190703125,30.3609889960938],[114.093436308594,30.3712209296875],[114.09009890625,30.3486452460938]]]]}},{"type":"Feature","properties":{"name":"汉阳区"},"geometry":{"type":"MultiPolygon","coordinates":[[[[114.251790800781,30.5682888007813],[114.277345,30.563843],[114.287345,30.563843],[114.28271609375,30.54847190625],[114.257345,30.503843],[114.227345,30.4838430000001],[114.201429472656,30.4879274726562],[114.177401152344,30.5035744453125],[114.19408328125,30.5291896796876],[114.172215605469,30.5442897773437],[114.128311796875,30.5258473945313],[114.133465605469,30.548843],[114.131224394531,30.5588430000001],[114.133568144531,30.5692946601562],[114.117345,30.5938430000001],[114.157345,30.5938430000001],[114.157345,30.603843],[114.181824980469,30.5882692695313],[114.251790800781,30.5682888007813]]]]}},{"type":"Feature","properties":{"name":"东西湖区"},"geometry":{"type":"MultiPolygon","coordinates":[[[[114.172899199219,30.7393971992188],[114.182769804688,30.6937673164063],[114.242430449219,30.6680153632813],[114.276143828125,30.6878322578126],[114.287345,30.6738430000001],[114.28062625,30.66056175],[114.260704375,30.6504836250001],[114.257345,30.643843],[114.217345,30.623843],[114.146243925781,30.6327272773438],[114.157345,30.603843],[114.157345,30.5938430000001],[114.117345,30.5938430000001],[114.072386503906,30.5993581367188],[114.014888945313,30.5934963203125],[114.032806425781,30.6083815742188],[114.041883574219,30.6203249335938],[114.012345,30.6173146796876],[113.988643828125,30.6197292304687],[113.962806425781,30.6793044257813],[113.947345,30.683843],[113.935697050781,30.7007155585938],[113.921898222656,30.697622296875],[113.891861601563,30.7171804023438],[113.883260527344,30.7319997382813],[113.908509550781,30.7263405585937],[113.901160917969,30.7591213203125],[113.907345,30.773843],[113.992948027344,30.7893923164063],[114.124241972656,30.7759987617188],[114.157345,30.763843],[114.161790800781,30.7482888007813],[114.172899199219,30.7393971992188]]]]}},{"type":"Feature","properties":{"name":"蔡甸区"},"geometry":{"type":"MultiPolygon","coordinates":[[[[113.988643828125,30.6197292304687],[114.012345,30.6173146796876],[114.041883574219,30.6203249335938],[114.032806425781,30.6083815742188],[114.014888945313,30.5934963203125],[114.072386503906,30.5993581367188],[114.117345,30.5938430000001],[114.133568144531,30.5692946601562],[114.131224394531,30.5588430000001],[114.133465605469,30.548843],[114.128311796875,30.5258473945313],[114.172215605469,30.5442897773437],[114.19408328125,30.5291896796876],[114.177401152344,30.5035744453125],[114.201429472656,30.4879274726562],[114.227345,30.4838430000001],[114.191790800781,30.4393971992188],[114.167345,30.4038430000001],[114.161429472656,30.3997585273438],[114.141007109375,30.370180890625],[114.111429472656,30.3497585273438],[114.107345,30.343843],[114.09009890625,30.3486452460938],[114.093436308594,30.3712209296875],[114.024190703125,30.3609889960938],[114.002110625,30.3476686835938],[113.992857695313,30.3596584296875],[113.977345,30.3573659492188],[113.947345,30.3617995429687],[113.908482695313,30.3560549140625],[113.891624785156,30.3148635078126],[113.87170046875,30.29948753125],[113.857471953125,30.2647194648438],[113.832345,30.2798757148438],[113.81298953125,30.2681984687501],[113.777345,30.2538430000001],[113.786441679688,30.2908815742188],[113.761925078125,30.28538596875],[113.753260527344,30.3297585273438],[113.737191191406,30.34085471875],[113.743648710938,30.3696584296876],[113.707667265625,30.378891828125],[113.697345,30.393843],[113.715030546875,30.4167580390625],[113.767611113281,30.43827659375],[113.800413847656,30.4807741523438],[113.82298953125,30.49819846875],[113.847738066406,30.5302638984375],[113.872542753906,30.52659690625],[113.883878203125,30.567309796875],[113.937034941406,30.5821096015625],[113.930867949219,30.623843],[113.933160429688,30.6393556953126],[113.921092558594,30.6486696601563],[113.947345,30.683843],[113.962806425781,30.6793044257813],[113.988643828125,30.6197292304687]]]]}},{"type":"Feature","properties":{"name":"硚口区"},"geometry":{"type":"MultiPolygon","coordinates":[[[[114.233616972656,30.6095143867188],[114.228011503906,30.5845095039063],[114.258377714844,30.5913161445313],[114.277345,30.563843],[114.251790800781,30.5682888007813],[114.181824980469,30.5882692695313],[114.157345,30.603843],[114.146243925781,30.6327272773438],[114.217345,30.623843],[114.221429472656,30.6179274726563],[114.233616972656,30.6095143867188]]]]}},{"type":"Feature","properties":{"name":"洪山区"},"geometry":{"type":"MultiPolygon","coordinates":[[[[114.347345,30.573843],[114.343829375,30.5668923164063],[114.313985625,30.5523195625],[114.320704375,30.5704836250001],[114.347345,30.573843]]],[[[114.357345,30.613843],[114.347345,30.613843],[114.347345,30.623843],[114.357345,30.623843],[114.357345,30.613843]]],[[[114.347345,30.573843],[114.357345,30.613843],[114.416571074219,30.6272975898438],[114.431790800781,30.6082888007812],[114.4616028125,30.5893971992188],[114.4512903125,30.6723073554688],[114.372899199219,30.6482888007812],[114.347345,30.643843],[114.370142851563,30.6768630195313],[114.397345,30.683843],[114.438463164063,30.6982546210938],[114.507345,30.683843],[114.534249296875,30.676938703125],[114.59142703125,30.5679274726563],[114.617345,30.563843],[114.626119414063,30.5259841132813],[114.633160429688,30.4783303046876],[114.62170046875,30.4694875312501],[114.610362578125,30.4547951484376],[114.587345,30.463843],[114.5819153125,30.4685182929688],[114.583526640625,30.4885182929687],[114.571690703125,30.4987136054688],[114.58443484375,30.5215505195313],[114.558565703125,30.5384719062501],[114.511666289063,30.5123049140625],[114.513424101563,30.4904006171875],[114.501422148438,30.4577126289063],[114.479742460938,30.4594533515626],[114.455889921875,30.4871413398438],[114.438565703125,30.4984719062501],[114.402623320313,30.4784181953125],[114.373316679688,30.4807741523438],[114.361302519531,30.4668288398438],[114.363138457031,30.4439553046876],[114.346485625,30.4192140937501],[114.291280546875,30.4500173164063],[114.27271609375,30.4284719062501],[114.260330839844,30.4178005195313],[114.2322278125,30.4200588203125],[114.222611113281,30.3881154609375],[114.202623320313,30.3992678046875],[114.183902617188,30.3977638984376],[114.167345,30.4038430000001],[114.191790800781,30.4393971992188],[114.227345,30.4838430000001],[114.257345,30.503843],[114.272615996094,30.4974294257813],[114.301839628906,30.5200759101563],[114.320230742188,30.5159548164063],[114.341429472656,30.5297585273438],[114.390006132813,30.5422243476563],[114.414354277344,30.5848830390625],[114.410089140625,30.6039089179688],[114.347345,30.573843]]]]}},{"type":"Feature","properties":{"name":"黄陂区"},"geometry":{"type":"MultiPolygon","coordinates":[[[[114.487345,30.723843],[114.481910429688,30.7365407539063],[114.464346953125,30.7278957343751],[114.490704375,30.717202375],[114.517252226563,30.7037721992187],[114.507345,30.683843],[114.438463164063,30.6982546210938],[114.397345,30.683843],[114.393531523438,30.6900295234376],[114.362054472656,30.7007570625001],[114.33287234375,30.6771218085938],[114.31033328125,30.6841408515626],[114.287345,30.6738430000001],[114.276143828125,30.6878322578126],[114.242430449219,30.6680153632813],[114.182769804688,30.6937673164063],[114.172899199219,30.7393971992188],[114.161790800781,30.7482888007813],[114.157345,30.763843],[114.174232207031,30.7686721015626],[114.170479765625,30.798843],[114.172967558594,30.8188430000001],[114.170325957031,30.8400710273438],[114.151678496094,30.8885866523437],[114.166102324219,30.9910573554688],[114.151688261719,31.028559796875],[114.153448515625,31.0427150703126],[114.178450957031,31.0627370429687],[114.187345,31.073843],[114.174444609375,31.1026442695313],[114.233531523438,31.1676564765625],[114.241158476563,31.1974318671875],[114.20963015625,31.2081764960938],[114.173531523438,31.2455495429688],[114.18797,31.2919045234376],[114.227532988281,31.3162819648438],[114.247345,31.3538430000001],[114.282720976563,31.36140159375],[114.318563261719,31.3212892890625],[114.437345,31.3138430000001],[114.393179960938,31.2357228828125],[114.432064238281,31.2085622382813],[114.4626575,31.1891042304688],[114.46187625,31.1759572578125],[114.521832304688,31.1324440742188],[114.524351835938,31.090141828125],[114.492979765625,31.0324098945313],[114.601148710938,30.953911359375],[114.607345,30.9338430000001],[114.603170195313,30.8680178046875],[114.591519804688,30.8496681953125],[114.579771757813,30.8192018867188],[114.517345,30.8068679023438],[114.493858671875,30.8115065742188],[114.486417265625,30.773843],[114.495186796875,30.7294631171876],[114.487345,30.723843]]]]}},{"type":"Feature","properties":{"name":"江岸区"},"geometry":{"type":"MultiPolygon","coordinates":[[[[114.397345,30.683843],[114.370142851563,30.6768630195313],[114.347345,30.643843],[114.337345,30.643843],[114.337345,30.623843],[114.32406375,30.61712425],[114.31062625,30.59056175],[114.297345,30.583843],[114.269466582031,30.5909987617188],[114.273538847656,30.6091652656251],[114.257345,30.643843],[114.260704375,30.6504836250001],[114.28062625,30.66056175],[114.287345,30.6738430000001],[114.31033328125,30.6841408515626],[114.33287234375,30.6771218085938],[114.362054472656,30.7007570625001],[114.393531523438,30.6900295234376],[114.397345,30.683843]]]]}},{"type":"Feature","properties":{"name":"江汉区"},"geometry":{"type":"MultiPolygon","coordinates":[[[[114.273538847656,30.6091652656251],[114.269466582031,30.5909987617188],[114.297345,30.583843],[114.297345,30.563843],[114.287345,30.563843],[114.277345,30.563843],[114.258377714844,30.5913161445313],[114.228011503906,30.5845095039063],[114.233616972656,30.6095143867188],[114.221429472656,30.6179274726563],[114.217345,30.623843],[114.257345,30.643843],[114.273538847656,30.6091652656251]]]]}},{"type":"Feature","properties":{"name":"江夏区"},"geometry":{"type":"MultiPolygon","coordinates":[[[[114.537345,30.0238430000001],[114.533922148438,30.0360353828125],[114.525152617188,30.0272658515625],[114.5300403125,29.9941139960938],[114.53361453125,29.9781716132813],[114.527345,29.973843],[114.512154570313,29.9786525703125],[114.349898710938,30.0384230781251],[114.302725859375,30.013462140625],[114.236627226563,29.9977175117188],[114.207345,30.003843],[114.20298953125,30.02948753125],[114.19170046875,30.04819846875],[114.18298953125,30.0894875312501],[114.15670046875,30.1002468085938],[114.14298953125,30.14948753125],[114.107196074219,30.1977663398438],[114.07408328125,30.2113161445313],[114.029849882813,30.2047805],[114.037345,30.223843],[114.053260527344,30.2279274726563],[114.076954375,30.2433571601563],[114.095513945313,30.3156740546875],[114.107345,30.343843],[114.111429472656,30.3497585273438],[114.141007109375,30.370180890625],[114.161429472656,30.3997585273438],[114.167345,30.4038430000001],[114.183902617188,30.3977638984376],[114.202623320313,30.3992678046875],[114.222611113281,30.3881154609375],[114.2322278125,30.4200588203125],[114.260330839844,30.4178005195313],[114.27271609375,30.4284719062501],[114.291280546875,30.4500173164063],[114.346485625,30.4192140937501],[114.363138457031,30.4439553046876],[114.361302519531,30.4668288398438],[114.373316679688,30.4807741523438],[114.402623320313,30.4784181953125],[114.438565703125,30.4984719062501],[114.455889921875,30.4871413398438],[114.479742460938,30.4594533515626],[114.501422148438,30.4577126289063],[114.513424101563,30.4904006171875],[114.511666289063,30.5123049140625],[114.558565703125,30.5384719062501],[114.58443484375,30.5215505195313],[114.571690703125,30.4987136054688],[114.583526640625,30.4885182929687],[114.5819153125,30.4685182929688],[114.587345,30.463843],[114.581217070313,30.4388845039063],[114.589068632813,30.4038430000001],[114.581124296875,30.3683913398438],[114.597345,30.343843],[114.59142703125,30.3297585273438],[114.58326296875,30.2879274726563],[114.57142703125,30.2797585273438],[114.56170046875,30.2537526679688],[114.54142703125,30.2397585273438],[114.53326296875,30.2079274726563],[114.508023710938,30.1691701484376],[114.499371367188,30.13058128125],[114.530538359375,30.0903688789062],[114.537345,30.0638430000001],[114.555494414063,30.0363747382813],[114.537345,30.0238430000001]]]]}},{"type":"Feature","properties":{"name":"青山区"},"geometry":{"type":"MultiPolygon","coordinates":[[[[114.4512903125,30.6723073554688],[114.4616028125,30.5893971992188],[114.431790800781,30.6082888007812],[114.416571074219,30.6272975898438],[114.357345,30.613843],[114.357345,30.623843],[114.347345,30.623843],[114.337345,30.623843],[114.337345,30.643843],[114.347345,30.643843],[114.372899199219,30.6482888007812],[114.4512903125,30.6723073554688]]]]}},{"type":"Feature","properties":{"name":"武昌区"},"geometry":{"type":"MultiPolygon","coordinates":[[[[114.347345,30.573843],[114.320704375,30.5704836250001],[114.313985625,30.5523195625],[114.343829375,30.5668923164063],[114.410089140625,30.6039089179688],[114.414354277344,30.5848830390625],[114.390006132813,30.5422243476563],[114.341429472656,30.5297585273438],[114.320230742188,30.5159548164063],[114.301839628906,30.5200759101563],[114.272615996094,30.4974294257813],[114.257345,30.503843],[114.28271609375,30.54847190625],[114.287345,30.563843],[114.297345,30.563843],[114.297345,30.583843],[114.31062625,30.59056175],[114.32406375,30.61712425],[114.337345,30.623843],[114.347345,30.623843],[114.347345,30.613843],[114.357345,30.613843],[114.347345,30.573843]]]]}},{"type":"Feature","properties":{"name":"新洲区"},"geometry":{"type":"MultiPolygon","coordinates":[[[[114.487345,30.723843],[114.464346953125,30.7278957343751],[114.481910429688,30.7365407539063],[114.487345,30.723843]]],[[[114.487345,30.723843],[114.495186796875,30.7294631171876],[114.486417265625,30.773843],[114.493858671875,30.8115065742188],[114.517345,30.8068679023438],[114.579771757813,30.8192018867188],[114.591519804688,30.8496681953125],[114.603170195313,30.8680178046875],[114.607345,30.9338430000001],[114.642310820313,30.9395876289062],[114.65263796875,30.93806175],[114.68205203125,30.94962425],[114.692916289063,30.9480202460938],[114.707345,30.983843],[114.760592070313,30.9925905585938],[114.767345,30.983843],[114.7546496875,30.9784084296875],[114.763292265625,30.9608449531251],[114.767345,30.983843],[114.794913359375,31.0020632148438],[114.812764921875,30.9543532539063],[114.857843046875,30.9442482734375],[114.875474882813,30.9713259101563],[114.849718046875,30.9891091132813],[114.891695585938,31.0164430976563],[114.956392851563,30.9963893867187],[114.9866809375,31.0031764960938],[114.981221953125,30.9788430000001],[114.983468046875,30.9688430000001],[114.980186796875,30.9542116523438],[114.99142703125,30.9379274726563],[115.02326296875,30.9297585273438],[115.03142703125,30.9179274726563],[115.04326296875,30.9097585273438],[115.05142703125,30.8979274726563],[115.077345,30.8938430000001],[115.072349882813,30.8759108710938],[115.040767851563,30.8568605781251],[115.007603789063,30.8617604804687],[114.991529570313,30.8493556953125],[114.995386992188,30.8232717109375],[114.950699492188,30.8049831367187],[114.953433867188,30.7864650703125],[114.927345,30.7903200507813],[114.903922148438,30.786860578125],[114.881954375,30.8001100898437],[114.866519804688,30.7623928046876],[114.829346953125,30.7399684882813],[114.787701445313,30.7283718085938],[114.80312625,30.6891359687501],[114.800284453125,30.6698854804688],[114.812345,30.6681032539063],[114.82490359375,30.6699611640626],[114.84170046875,30.6481984687501],[114.859561796875,30.6344118476562],[114.797345,30.623843],[114.757261992188,30.6135573554688],[114.715094023438,30.5860964179688],[114.64593875,30.5683498359376],[114.617345,30.563843],[114.59142703125,30.5679274726563],[114.534249296875,30.676938703125],[114.507345,30.683843],[114.517252226563,30.7037721992187],[114.490704375,30.717202375],[114.487345,30.723843]]],[[[114.933922148438,31.0360353828126],[114.937345,31.023843],[114.925152617188,31.0272658515625],[114.933922148438,31.0360353828126]]],[[[114.97334109375,31.036567609375],[114.977345,31.0138430000001],[114.964346953125,31.0194045234375],[114.97334109375,31.036567609375]]]]}}]});
}));