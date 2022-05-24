'use strict';

module.exports = {
  async up (queryInterface) {
    await queryInterface.bulkInsert('tb_ranges_mapa', [
			{
				"co_cor" : "#1C4587",
				"no_aba" : "Vacina",
				"vl_minimo" : 0.2800,
				"vl_maximo" : 1.0000
			},
			{
				"co_cor" : "#B5394 ",
				"no_aba" : "Vacina",
				"vl_minimo" : 0.2600,
				"vl_maximo" : 0.2799
			},
			{
				"co_cor" : "#3D85C6",
				"no_aba" : "Vacina",
				"vl_minimo" : 0.2500,
				"vl_maximo" : 0.2599
			},
			{
				"co_cor" : "#6D9EEB",
				"no_aba" : "Vacina",
				"vl_minimo" : 0.2400,
				"vl_maximo" : 0.2499
			},
			{
				"co_cor" : "#A4C2F4",
				"no_aba" : "Vacina",
				"vl_minimo" : 0.0000,
				"vl_maximo" : 0.2399
			},
			{
				"co_cor" : "#E69138",
				"no_aba" : "Casos",
				"vl_minimo" : 8001.0000,
				"vl_maximo" : 10000.0000
			},
			{
				"co_cor" : "#F6B26B",
				"no_aba" : "Casos",
				"vl_minimo" : 6001.0000,
				"vl_maximo" : 8000.0000
			},
			{
				"co_cor" : "#F9CB9C",
				"no_aba" : "Casos",
				"vl_minimo" : 4001.0000,
				"vl_maximo" : 6000.0000
			},
			{
				"co_cor" : "#FCE5CD",
				"no_aba" : "Casos",
				"vl_minimo" : 0.0000,
				"vl_maximo" : 4000.0000
			},
			{
				"co_cor" : "#B45F06",
				"no_aba" : "Casos",
				"vl_minimo" : 10001.0000,
				"vl_maximo" : 999999.0000
			},
			{
				"co_cor" : "#38761D",
				"no_aba" : "Testagem",
				"vl_minimo" : 50001.0000,
				"vl_maximo" : 999999.0000
			},
			{
				"co_cor" : "#6AA84F",
				"no_aba" : "Testagem",
				"vl_minimo" : 40001.0000,
				"vl_maximo" : 50000.0000
			},
			{
				"co_cor" : "#93C47D",
				"no_aba" : "Testagem",
				"vl_minimo" : 30001.0000,
				"vl_maximo" : 40000.0000
			},
			{
				"co_cor" : "#B6D7A8",
				"no_aba" : "Testagem",
				"vl_minimo" : 20001.0000,
				"vl_maximo" : 30000.0000
			},
			{
				"co_cor" : "#D9EAD3",
				"no_aba" : "Testagem",
				"vl_minimo" : 0.0000,
				"vl_maximo" : 20000.0000
			},
			{
				"co_cor" : "#990000",
				"no_aba" : "Óbito",
				"vl_minimo" : 0.2800,
				"vl_maximo" : 1.0000
			},
			{
				"co_cor" : "#CC0000",
				"no_aba" : "Óbito",
				"vl_minimo" : 0.2600,
				"vl_maximo" : 0.2799
			},
			{
				"co_cor" : "#E06666",
				"no_aba" : "Óbito",
				"vl_minimo" : 0.2500,
				"vl_maximo" : 0.2599
			},
			{
				"co_cor" : "#EA9999",
				"no_aba" : "Óbito",
				"vl_minimo" : 0.2400,
				"vl_maximo" : 0.2499
			},
			{
				"co_cor" : "#F4CCCC",
				"no_aba" : "Óbito",
				"vl_minimo" : 0.0000,
				"vl_maximo" : 0.2399
			}
		], {});
  },

  async down (queryInterface) {
    await queryInterface.bulkDelete('tb_ranges_mapa', null, {});
  }
};
