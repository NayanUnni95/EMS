from tkinter import *

window = Tk()

def clickAction():
    print("Button clicked...")

window.geometry("300x300")
window.title("Employee Management System")
window.configure(bg="sky blue")

button = Button(text="Hello", width=20, height=20, command=clickAction)
label = Label(window, text="Employee Management System...")

button.pack()
label.pack()

window.mainloop()