(function(){
    layer.data = {};
    layer.sendData = function(key,value){
        layer.data[key] = value;
    };
    layer.readData = function(key){
        var value = layer.data[key];
        delete layer.data[key];
        return value;
    };
})($);