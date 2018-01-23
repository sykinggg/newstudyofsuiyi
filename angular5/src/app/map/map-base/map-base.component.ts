import { Component, OnInit } from '@angular/core';
import { MapServiceService } from '../../service/map-service/map-service.service';
declare var AMap: any;

@Component({
    selector: 'app-map-base',
    templateUrl: './map-base.component.html',
    styleUrls: ['./map-base.component.scss'],
    providers: [MapServiceService]
})
export class MapBaseComponent implements OnInit {

    // 地图对象
    map: any;

    // 地图加载控件对象
    mapLoad: any = {
        toolBar: {},
        scale: {},
        mapType: {},
        overView: {}
    }
    // 地图加载控件是否显示标识
    mapModel: Object = {
        toolBar: true,
        scale: true,
        mapType: true,
        overView: true,
        toggleDrag: true,
        toggleKeyboard: true,
        toggleDoubleClickZoom: true,
        toggleIsHotspot: true
    }
    // 根据城市名称设置中心点
    locationCity: String = '';

    // 重新定位
    setCity: Function = () => {
        let city = this.locationCity;
        if (!this.locationCity) {
            city = '重庆';
        }
        this.map.setCity(city);
    }

    // 地图功能是否限制
    toggle: Function = function (type) {
        let setObject: Object = {};
        if (this[type]) {
            setObject[type] = true;
        } else {
            setObject[type] = false;
        }
        this.map.setStatus(setObject);
    }

    // 控件显示
    toggleShow: Function = function (type: string) {
        if (!this.mapModel[type]) {
            this.mapLoad[type].hide();
        } else {
            this.mapLoad[type].show();
        }
    }

    // 限制区域为当前视野
    setLimitBounds: Function = function () {
        this.map.setLimitBounds(this.map.getBounds());
    }

    // 获取限制区域坐标
    getLimitBounds: Function = function () {
        let limitBounds = this.map.getLimitBounds();

        if (limitBounds) {
            var tip = [];
            tip.push('限制区域：\n西南坐标[' + limitBounds.southwest.lng + ',' + limitBounds.southwest.lat + ']\n')
            tip.push('东北坐标[' + limitBounds.northeast.lng + ',' + limitBounds.northeast.lat + ']')
            alert(tip.join(''));
        } else {
            alert('未设置限制区域');
        }
    }

    // 清除区域限制
    clearLimitBounds: Function = function () {
        this.map.clearLimitBounds();
    }

    mapInformation: Object = {};
    // 默认获取当前视野的地址信息
    mapMoveend: Function = () => {
        this.map.on('moveend', this.getCity);
    }
    getCity: Function = () => {
        this.map.getCity((data) => {
            console.log(data);
            this.mapInformation = data;
            // if (data['province'] && typeof data['province'] === 'string') {
            //     document.getElementById('info').innerHTML = '城市：' + (data['city'] || data['province']);
            // }
        });
    }

    zoomNum: Number = 0;
    // 缩放级别
    defaultZoomend: Function = () => {
        AMap.event.addListener(this.map, 'zoomend', this.getZoom())
    }
    getZoom: Function = () => {
        this.zoomNum = this.map.getZoom();
    }
    constructor(private mapService: MapServiceService) { }

    polygonSetting: Object = {
        // path: arr,    //设置多边形轮廓的节点数组
        strokeColor: "#0000ff",
        strokeOpacity: 0.2,
        strokeWeight: 3,
        fillColor: "#f5deb3",
        fillOpacity: 0.35
    }

    ngOnInit() {
        // 创建地图对象
        this.map = this.mapService.createMap('gaodemap');
        // 加载工具条
        this.mapLoad.toolBar = this.mapService.setToolBar(this.map);
        // 加载比例尺
        this.mapLoad.scale = this.mapService.setScale(this.map);
        // 加载地图实景（含路况）
        this.mapLoad.mapType = this.mapService.setMapType(this.map);
        // 加载鹰眼
        this.mapLoad.overView = this.mapService.setOverView(this.map);
        // 自定义搜索功能
        this.mapService.defaultSearch(this.map, 'tipinput', '成都');
        // 绑定地图滑动
        this.mapMoveend();
        // 获取城市
        this.getCity();
        // 默认设置地图层级
        this.defaultZoomend();
        // 获取地图层级
        this.getZoom();
        // 多边形展示
        this.mapService.mapPolyShow(this.map, [{lng: '', lat: ''}], this.polygonSetting);
        this.map.setZoomAndCenter(this.zoomNum, [116.403322, 39.900255]);
    }
}
