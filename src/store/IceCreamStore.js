import {observable, action, computed} from "mobx";

class IceCreamStore {

    @observable iceCreams=[];

    @action addIceCream =(flavor, color) =>{
        this.iceCreams.push({flavor, color});
    }

    @observable filterString;
    
    @observable isfiltered =false;
     
    @computed get filteredArray(){
       return this.iceCreams.filter(iceCream => iceCream.color===this.filterString || iceCream.flavor===this.filterString) ;
    }

    @computed get iceCreamsCount(){
        return this.iceCreams.length;
    }

    @computed get filteredArrayCount(){
        return this.filteredArray.length;
    }


}

const store = new IceCreamStore();
export default store;
