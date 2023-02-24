import { computed, defineComponent, ref } from 'vue';
import SearchResults from '@/components/search-results/SearchResults.vue'

export default defineComponent({
    name: 'SearchBar',
    components: { SearchResults },
    setup() {

        const dbouncedTimeout = ref();
        const dbouncedValue = ref('Hola')

        return {
            dbouncedValue,

            searchTerm: computed({
                get() {
                    return dbouncedValue.value;
                },
                set(val: string) {
                    if (dbouncedTimeout.value) clearTimeout(dbouncedTimeout.value);

                    dbouncedTimeout.value = setTimeout(() => {
                        dbouncedValue.value = val;
                    }, 2000);
                }
            })

        }
    }
})