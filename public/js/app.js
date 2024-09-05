Vue.createApp({
    data(){

        return {
            slider_images:
            [
            'max-sm:bg-back_small_01 max-lg:bg-back_medium_01 lg:bg-back_large_01',
            'max-sm:bg-back_small_02 max-lg:bg-back_medium_02 lg:bg-back_large_02',
            'max-sm:bg-back_small_03 max-lg:bg-back_medium_03 lg:bg-back_large_03',
            ],
            index:0,
            isOpen: false,
        }
    },

    methods:{
        onTimerInterval(step = 1){
            this.index = (this.index + step + this.slider_images.length) % this.slider_images.length;
        },
        dropdownToggele(){
            this.dropdown.classList.toggle('top-[4.1rem]')
            
        },
       
    toggleDropdown() {
    this.isOpen = !this.isOpen;
  },
    },

    mounted(){
        setInterval(this.onTimerInterval, 5000);
        
    }

}).mount("#app");


