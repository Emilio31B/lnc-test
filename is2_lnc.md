# Notación curiosa

Se  está desarrollando una notación posicional original para representar números enteros. Se le ha llamado “La Notación Curiosa”
(LNC), el cual usa los mismos dígitos tal como la notación decimal. Por ejemplo, del 0 al 9.

Para convertir un número A de LNC a la notación decimal usted debe sumar
k términos, donde k es el número de dígitos de A (en la notación LNC). El valor del i-ésimo término, que
corresponde al i-ésimo dígito a<sub>i</sub> contando de derecha a izquierda, es a<sub>i</sub> x i!. Por ejemplo 719<sub>LNC</sub> es
equivalente a 53, a partir de 7 x 3! + 1 x 2! + 9 x 1! = 53.

Realice una función lncToDecimal que reciba como argumento de entrada una cadena de caracteres de máximo 5 dígitos,
que va a representar un número en la notación LNC. Esta función debe retornar el número pero en notación decimal (base 10),

Además, debe de implementar pruebas unitarias que aseguren que ha contemplado la mayor cantidad de casos
posibles.
<!--stackedit_data:
eyJoaXN0b3J5IjpbLTI1OTU1NjM2MV19
-->