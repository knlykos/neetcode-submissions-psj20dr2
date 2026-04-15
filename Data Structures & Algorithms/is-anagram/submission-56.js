class Solution {
        /**
         * @param {string} s
         * @param {string} t
         * @return {boolean}
         */
    isAnagram(s, t) {
        // Validación de longitud: Eficiencia O(1)
        if (s.length !== t.length) return false;

        const counts = new Map();
        // Construcción de la frecuencia de caracteres
        for (const char of s) {
            counts.set(char, (counts.get(char) || 0) + 1);
        }

        // Validación y decremento
        for (const char of t) {
            const count = counts.get(char);
            
            // Si el carácter no existe o ya se consumió su frecuencia
            if (!count) return false; 
            
            counts.set(char, count - 1);
        }

        return true;
    }

}
