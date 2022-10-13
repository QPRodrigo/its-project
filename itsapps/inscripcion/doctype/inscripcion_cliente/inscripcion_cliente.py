# Copyright (c) 2022, QPRodrigo and contributors
# For license information, please see license.txt

# import frappe
from frappe.model.document import Document
from datetime import datetime

class InscripcionCliente(Document):
	
	def before_save(self):
	    arry_mes = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre']	 
	    if not self.fecha_de_registro:
	        now = datetime.now()
	        self.fecha_de_registro = now
	        self.mes = arry_mes[now.month-1]
