const dataV = {
    //three.js 获取点击的对象;
    getObjectFromAxis(e, allItems, width = window.innerWidth, height = window.innerHeight){
        var mouse = {};
        //将鼠标点击位置的屏幕坐标转成threejs中的标准坐标
        mouse.x = (e.offsetX / width) * 2 - 1;
        mouse.y = -(e.offsetY / height) * 2 + 1;
        //新建一个三维单位向量 假设z方向就是0.5
        //根据照相机，把这个向量转换到视点坐标系
        var vector = new THREE.Vector3(mouse.x, mouse.y,0.5).unproject(camera);

        //在视点坐标系中形成射线,射线的起点向量是照相机， 射线的方向向量是照相机到点击的点，这个向量应该归一标准化。
        var raycaster = new THREE.Raycaster(camera.position, vector.sub(camera.position).normalize());

        //射线和模型求交，选中一系列直线
        var intersects = raycaster.intersectObjects(allItems);

        return intersects;
    }
}

export default dataV