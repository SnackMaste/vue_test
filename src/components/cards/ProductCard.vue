<script setup lang="ts">
    import { ref, onMounted } from 'vue';
    import Data from '../../../backend/data.json';
    const products:[] = Data;
    function formatCurrency(value: number): string {
        return new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP',minimumFractionDigits: 0, maximumFractionDigits: 0 }).format(value);
    }
</script>

<template>
    <div v-for="product in products" :key='product["id"]' class="w-52 m-5 rounded-3xl border-2 border-yellow-400 bg-black min-h-80 flex flex-col items-center justify-around">
        <img :src="`./src/assets/images/products/${product['image']}`" class="w-44 h-44 rounded-3xl border-2 border-yellow-400 mt-2">
        <div class="w-full">
            <div class="w-full flex mt-2 justify-center items-center">
                <div class="w-1/2 text-center text-yellow-400 border-t border-yellow-400 py-2">DETALLE</div>
                <div class="border-x h-10 border-yellow-400"></div>
                <div class="w-1/2 text-center text-yellow-400 border-t border-yellow-400 py-2">AGREGAR</div>
            </div>
            <div class="w-full text-center text-yellow-400 py-2 text-wrap font-bold border-y-2 border-yellow-400">{{ product["name"] }}</div>
        </div>
        <div class="w-full text-center text-yellow-400 py-2"> {{ formatCurrency(product["price"]) }} COP</div>
    </div>
</template>