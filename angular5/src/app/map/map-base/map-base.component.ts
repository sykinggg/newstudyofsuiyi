import { Component, OnInit } from '@angular/core';
declare var AMap: any;

@Component({
    selector: 'app-map-base',
    templateUrl: './map-base.component.html',
    styleUrls: ['./map-base.component.scss']
})
export class MapBaseComponent implements OnInit {

    map: any;
    mapLoad: Object = {
        toolBar: null,
        scale: null,
        mapType: null,
        overView: null
    }
    mapModel: Object = {
        toolBar: true,
        scale: true,
        mapType: true,
        overView: true
    }

    // 重新定位
    setCity: Function = function() {
        this.map.setCity('重庆');
    }

    // 控件显示
    toggleShow: Function = function(type: string) {
        if(this.mapModel[type]) {
            this.mapLoad[type].hide();
        }else{
            this.mapLoad[type].show();
        }
    }

    // 加载工具条
    setToolBar: Function = function() {
        //自定义Marker
        let customMarker = new AMap.Marker({
            offset: new AMap.Pixel(-14, -34),//相对于基点的位置
            icon: new AMap.Icon({  //复杂图标
                size: new AMap.Size(27, 36),//图标大小
                image: "http://webapi.amap.com/images/custom_a_j.png", //大图地址
                imageOffset: new AMap.Pixel(-28, 0)//相对于大图的取图位置
            })
        });
        //加载地图工具条
        this.map.plugin(["AMap.ToolBar"], ()=>{
            this.mapLoad.toolBar = new AMap.ToolBar({ locationMarker: customMarker });
            this.map.addControl(this.mapLoad.toolBar);
        });
    }


    // 加载比例尺
    setScale: Function = function() {
        this.map.plugin(["AMap.Scale"], ()=>{
            this.mapLoad.scale = new AMap.Scale();
            this.map.addControl(this.mapLoad.scale);
        });
    }
    
    // 加载地图实景（含路况）
    setMapType: Function = function() {
        this.map.plugin(["AMap.MapType"], ()=>{
            this.mapLoad.mapType = new AMap.MapType();
            this.map.addControl(this.mapLoad.mapType);
        });
    }
    // 加载鹰眼
    setOverView: Function = function() {
        this.map.plugin(["AMap.OverView"], ()=>{
            this.mapLoad.overView = new AMap.OverView();
            this.mapLoad.overView.open();
            this.map.addControl(this.mapLoad.overView);
            this.load.setOverView = true;
        });
    }

    constructor() { }

    ngOnInit() {
        console.log(AMap);
        this.map = new AMap.Map('gaodemap');
        // map.plugin('AMap.Geolocation', () => {
        //     let geolocation = new AMap.Geolocation({
        //         enableHighAccuracy: true,//是否使用高精度定位，默认:true
        //         timeout: 10000,          //超过10秒后停止定位，默认：无穷大
        //         maximumAge: 0,           //定位结果缓存0毫秒，默认：0
        //         convert: true,           //自动偏移坐标，偏移后的坐标为高德坐标，默认：true
        //         showButton: true,        //显示定位按钮，默认：true
        //         buttonPosition: 'LB',    //定位按钮停靠位置，默认：'LB'，左下角
        //         buttonOffset: new AMap.Pixel(10, 20),//定位按钮与设置的停靠位置的偏移量，默认：Pixel(10, 20)
        //         showMarker: true,        //定位成功后在定位到的位置显示点标记，默认：true
        //         showCircle: true,        //定位成功后用圆圈表示定位精度范围，默认：true
        //         panToLocation: true,     //定位成功后将定位到的位置作为地图中心点，默认：true
        //         zoomToAccuracy: true     //定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：false
        //     });
        //     map.addControl(geolocation);
        // });
        this.setToolBar();
        this.setScale();
        this.setMapType();
        this.setOverView();
    }
}
