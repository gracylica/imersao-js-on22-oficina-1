const {calcularHorasDeProjeto} = require('../../dominio/calculadora/Projeto/horasPorProjeto')

describe('calculo de horas totais para finalizar um projeto', () => {
    test('Dado um array  com as funcionalidades desejaveis no projeto, retorna a soma das horas nescessarias', () => {
        const funcionalidades = [
            'setup',
            'responsividade',
            'construcao_1_pagina'
        ]

        const result = calcularHorasDeProjeto(funcionalidades);
        expect(result).toEqual(32);
    })
})