// Copyright (c) 2022, QPRodrigo and contributors
// For license information, please see license.txt

frappe.ui.form.on('Inscripcion Cliente', {
	// refresh: function(frm) {
	forma_de_pago: function (frm) {
		frm.toggle_display(['cuotas_section'], frm.doc.forma_de_pago === 'CUOTAS' || frm.doc.forma_de_pago === 'RESERVA - No hay Activación');
		frm.toggle_display(['reserva_section'], frm.doc.forma_de_pago === 'RESERVA - No hay Activación');
		frm.toggle_display(['medio_pago__contado'], frm.doc.forma_de_pago === 'CONTADO');	
	},
	// }
});
