# import ttkbootstrap as ttk
# import tkinter as tk
# import ctypes
# from tkinter import messagebox
# from metadata import __AppName__, __version__

# class Matchmaker(ttk.Window):
#     user32 = ctypes.windll.user32
#     screensize = user32.GetSystemMetrics(0), user32.GetSystemMetrics(1)

#     def __init__(self):
#         super().__init__()
#         self.resizable(False, False)
#         w = 450
#         h = 120
#         sw = self.winfo_screenwidth()
#         sh = self.winfo_screenheight()
#         x = (sw - w) / 2
#         y = (sh - h) / 2
#         self.geometry('{0}x{1}+{2}+{3}'.format(w, h, int(x), int(y)))
#         self.title('ConveTransfer Match')
#         ttk.Button(self, text='kdf').pack()

#     def update_using_manager(self):
#         try:
#             # Read content from the 'window.txt' file
#             with open('window.txt', 'r') as file:
#                 # Process each line in the file
#                 for line in file:
#                     # Strip whitespace and newline characters
#                     data = line.strip()
                    
#                     # Attempt to convert the string to a tuple
#                     try:
#                         window_size = eval(data)
#                     except SyntaxError as se:
#                         print(f"SyntaxError in 'window.txt': {se}")
#                         continue

#                     # Compare screensize with the current tuple
#                     if window_size == self.screensize:
#                         print('yes')
#                         return  # Exit the loop if a match is found

#                 # If no match is found
#                 print('no')

#         except Exception as e:
#             print(f'The Error is here! {e}')

# if __name__ == '__main__':
#     APP = Matchmaker()
#     APP.update_using_manager()
#     APP.mainloop()


import ttkbootstrap as ttk
import tkinter as tk
import ctypes
import requests
from tkinter import messagebox
from metadata import __AppName__, __version__

class Matchmaker(ttk.Window):
    user32 = ctypes.windll.user32
    screensize = user32.GetSystemMetrics(0), user32.GetSystemMetrics(1)

    def __init__(self):
        super().__init__()
        self.resizable(False, False)
        w = 450
        h = 120
        sw = self.winfo_screenwidth()
        sh = self.winfo_screenheight()
        x = (sw - w) / 2
        y = (sh - h) / 2
        self.geometry('{0}x{1}+{2}+{3}'.format(w, h, int(x), int(y)))
        self.title('ConveTransfer Match')
        ttk.Button(self, text='kdf').pack()

    def update_using_manager(self):
        try:
            # Make an HTTP request to get the link(s)
            response = requests.get('http://localhost/suplike/socketra/updates/windows.txt')
            data = response.text.strip()  # Strip newline characters

            # Process each line in the response text
            for line in data.split('\n'):
                # Strip whitespace and newline characters
                url = line.strip()

                # Process the URL as needed (you can use it, display it, etc.)
                print(f'Processing URL: {url}')

        except Exception as e:
            print(f'The Error is here! {e}')

if __name__ == '__main__':
    APP = Matchmaker()
    APP.update_using_manager()
    APP.mainloop()
