from tkinter import ttk
import tkinter as tk

window = tk.Tk()
window.resizable(width = 1, height = 1)

window.title("Employee Management System")
treev = ttk.Treeview(window, selectmode ='browse')
treev.pack(side ='top')
verscrlbar = ttk.Scrollbar(window, orient ="vertical", command = treev.yview)
verscrlbar.pack(side ='right', fill ='x')
treev.configure(xscrollcommand = verscrlbar.set)
treev["columns"] = ("1", "2", "3", "4", "5", "6")
treev['show'] = 'headings'

treev.column("1", width = 90, anchor ='c')
treev.column("2", width = 90, anchor ='c')
treev.column("3", width = 90, anchor ='se')
treev.column("4", width = 90, anchor ='se')
treev.column("5", width = 100, anchor ='se')
treev.column("6", width = 150, anchor ='se')

treev.heading("1", text ="Id")
treev.heading("2", text ="Name")
treev.heading("3", text ="Sex")
treev.heading("4", text ="Rank")
treev.heading("5", text="Phone no")
treev.heading("6", text="Email")

for i in range(1, 100):
    treev.insert("", 'end', text ="L1", values =(i, "Alice", "F", "HOD", "0123456789", "name@gmail.com"))    

window.mainloop()
