class Solution {
    isAnagram(s, t) {
        if (s.length !== t.length) return false;

        // Int32Array(26) es más eficiente en memoria y caché que un Map.
        // Espacio: O(1) constante (26 entradas).
        const counts = new Int32Array(26);

        // Procesamos ambas cadenas en un solo ciclo (O(n)).
        for (let i = 0; i < s.length; i++) {
            counts[s.charCodeAt(i) - 97]++;
            counts[t.charCodeAt(i) - 97]--;
        }

        // Si todos los balances son 0, es un anagrama perfecto.
        for (let i = 0; i < 26; i++) {
            if (counts[i] !== 0) return false;
        }

        return true;
    }
}
