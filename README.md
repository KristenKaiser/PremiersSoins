#+TITLE: Premiers Soins Guidee, Les gestes qui sauvent, mains dans la mains.

* Contents :TOC:noexport:
 - [[#Introduction][Introduction]]
 - [[#Installation][Installation]]
   - [[#manual-installation][Manual installation]]

* Introduction
Premiers Soins Guidee est un projet cree pour le hackathon Digitale Alternance Medecine du 27-29 Janvier 2017 Organisee en partenariat avec Solocal Group et EPITECH. 

P.S.G est une application Ionic qui allie reconnaicance de forme et realite augmentee pour guidee au gestes qui sauvent dans l'urgence.


* Installation
** Manual installation
- Requis:
 - Ionic
 - OpenCV 3
- Clone the repo:

#+BEGIN_SRC shell
  cd /path/to/install/folder
  git clone https://github.com/KristenPire/PremiersSoins
#+END_SRC
#+TITLE: Window numbers for Emacs !

[[https://github.com/syl20bnr/spacemacs][file:https://cdn.rawgit.com/syl20bnr/spacemacs/442d025779da2f62fc86c2082703697714db6514/assets/spacemacs-badge.svg]] [[https://melpa.org/#/winum][file:https://melpa.org/packages/winum-badge.svg]] [[https://stable.melpa.org/#/winum][file:https://stable.melpa.org/packages/winum-badge.svg]]

* Contents :TOC:noexport:
 - [[#introduction][Introduction]]
 - [[#whats-changed-since-window-numbering][What's changed since window-numbering]]
 - [[#installation][Installation]]
   - [[#using-melpa][Using Melpa]]
   - [[#manual-installation][Manual installation]]
 - [[#how-to-use][How to use]]
 - [[#configuration][Configuration]]
   - [[#keybindings][Keybindings]]
   - [[#customize-options][Customize options]]
   - [[#configuration-file-example][Configuration file example]]
 - [[#future-developments][Future developments]]

* Introduction
Window numbers for Emacs: Navigate your windows and frames using numbers !

This package is an extended and actively maintained version of the
[[https://github.com/nschum/window-numbering.el][window-numbering]] package by Nikolaj Schumacher, with some ideas and code taken
from [[https://github.com/abo-abo/ace-window][ace-window]].

This version brings, among other things, support for number sets across multiple
frames, giving the user a smoother experience of multi-screen Emacs.

* What's changed since window-numbering
This package brings a lot of additions to the old window-numbering:

- Number sets across multiple frames, giving a smoother experience of
  multi-screen Emacs
- 3 possible scopes: frame-local, visible frames or all frames
- =get-window-by-number= public function, needed in Spacemacs and for future
  developments.
- Unlimited window numbers
- =select-window-by-number= can now be used interactively to select a window
  using prefix arg or =read-from-minibuffer=, allowing the selection of an
  unlimited number.
- Ignore buffers by name
- =;;;###autoload= all functions that should have public visibility
- Improved =customize= integration
- Removed =window-numbering-before-assign-hook=, which just duplicated
  =window-numbering-assign-func= in a more complicated fashion
- New default key bindings under the ~C-x w~ prefix, to be compliant with Emacs
  key bindings conventions and native Emacs key bindings
- =winum-set-keymap-prefix= helper function to change the prefix more easily
- More detailed README.org
- Improved docstrings
- Simplified implementation for better readability

* Installation
** Using Melpa
The recommended way of installing =winum= is from the [[https://melpa.org/#/winum][Melpa]] package repository:

#+BEGIN_SRC emacs-lisp
M-x package-install RET winum RET
#+END_SRC

You will find instructions to setup Melpa [[https://github.com/melpa/melpa#usage][here]] if you don't have it setup yet.

Once the package is installed, you need to load and activate =winum-mode= in
your Emacs configuration:

#+BEGIN_SRC emacs-lisp
  (require 'winum)

  (winum-mode)
#+END_SRC

** Manual installation
- Clone the repo:

#+BEGIN_SRC shell
  cd /path/to/install/folder
  git clone https://github.com/deb0ch/winum.el
#+END_SRC

- Add the following to your Emacs configuration:

#+BEGIN_SRC emacs-lisp
  (add-to-list 'load-path "/path/to/install/folder/winum.el/")

  (require 'winum)

  (winum-mode)
#+END_SRC

* How to use
| Key binding | Description                                                                                 |
|-------------+---------------------------------------------------------------------------------------------|
| ~C-x w <n>~ | select window <n>, where <n> ranges from 0 to 9. A negative argument deletes the window.    |
| ~C-x w `~   | select window by number. Number can be given as prefix arg or will be read from minibuffer. |

- =select-window-0-or-10=

  By default, ~C-x w 0~ is bound to =select-window-0-or-10=. If window 0 is not
  assigned, it will act on the window 10 instead.

  You can rebind this to the more straightforward =select-window-0= if you
  prefer.

- =select-window-by-number=

  If you happen to have more than 10 windows, you can use the
  =select-window-by-number= function, bound by default to ~C-x w `~.

  This function allows several ways to input the window number:

  - Use a numbered prefix argument.\\
    *Ex:* ~C-1 C-2 C-x w `~ to select window 12.
  - Use a negative prefix argument to delete the window.\\
    *Ex:* ~C-- C-1 C-2 C-x w `~ to delete window 12.
  - Use the negative prefix argument to delete window 0.\\
    *Ex:* ~C-- C-x w `~ to delete window 0.
  - Use the default prefix argument to delete current window.\\
    *Ex:* ~C-u C-x w `~ to delete current window.
  - If no prefix argument ig given, a number is read from minibuffer. A negative
    input will delete the window instead of selecting it.

* Configuration
** Keybindings
The default prefix for key bindings is ~C-x w~ for compatibility with native
Emacs bindings.

If you don't like ~C-x w~, you can set a prefix of your choosing using the
function =winum-set-keymap-prefix=:

#+BEGIN_SRC elisp
  (winum-set-keymap-prefix (kbd "C-c"))
#+END_SRC

This function overrides the value of =winum-keymap=, so you should call it
before customization of =winum-keymap= and/or after customization of
=winum-base-map=. Its argument must be a key sequence, like the ones returned by
=kbd=.

If you prefer no to use a prefix and have even shorter bindings, you can also
override =winum-keymap= in the minor mode bindings table:

#+BEGIN_SRC emacs-lisp
  (setq winum-keymap
      (let ((map (make-sparse-keymap)))
        (define-key map (kbd "C-`") 'winum-select-window-by-number)
        (define-key map (kbd "C-²") 'winum-select-window-by-number)
        (define-key map (kbd "M-0") 'winum-select-window-0-or-10)
        (define-key map (kbd "M-1") 'winum-select-window-1)
        (define-key map (kbd "M-2") 'winum-select-window-2)
        (define-key map (kbd "M-3") 'winum-select-window-3)
        (define-key map (kbd "M-4") 'winum-select-window-4)
        (define-key map (kbd "M-5") 'winum-select-window-5)
        (define-key map (kbd "M-6") 'winum-select-window-6)
        (define-key map (kbd "M-7") 'winum-select-window-7)
        (define-key map (kbd "M-8") 'winum-select-window-8)
        map))

  (require 'winum)

  (winum-mode)
#+END_SRC

Note that it is important to set =winum-keymap= /before/ the =require=.

You can also use the more conventional =define-key= on =winum-keymap=:

#+BEGIN_SRC emacs-lisp
  (define-key winum-keymap (kbd "C-x y o l o") 'winum-select-window-by-number)
#+END_SRC

*NB:* Both ~`~ and ~²~ are mapped to =winum-select-window-by-number= by default
      to handle both =qwerty= and =azerty= keyboard layouts. If you are using a
      different kind of layout, the recommended place to map it is the key
      beside ~1~.

** Customize options
Several options are available through Emacs' Customize interface under
=convenience= > =winum=:

- =winum-scope=

  Frames affected by a number set. Choices are 'frame-local 'visible or
  'global.

  Default: 'global

- =winum-reverse-frame-list=

  If t, order frames by reverse order of creation. Has effect only when
  =winum-scope= is not 'frame-local.

  Default: =nil=

- =winum-auto-assign-0-to-minibuffer=

  If non-nil, =winum-mode= assigns 0 to the minibuffer if active.

  Default: =t=

- =winum-assign-func=

  Function called for each window by =winum-mode=. This is called before
  automatic assignment begins. The function should return a number to have it
  assigned to the current-window, =nil= otherwise.

  This function along with `winum-auto-assign-0-to-minibuffer' are the only ways
  to have 0 assigned to a window.

  Example: always assign *Calculator* the number 9 and *NeoTree* the number 0:

#+BEGIN_SRC emacs-lisp
  (defun my-winum-assign-func ()
    (cond
     ((equal (buffer-name) "*Calculator*")
      9)
     ((string-match-p (buffer-name) ".*\\*NeoTree\\*.*")
      0)
     (t
      nil)))

  (setq winum-assign-func 'my-winum-assign-func)
#+END_SRC

  Default: =nil=

- =winum-auto-setup-mode-line=

  When nil, =winum-mode= will not display window numbers in the mode-line. You
  might want this to be nil if you use a package that already manages window
  numbers in the mode-line.

  Default: =t=

- =winum-mode-line-position=

  The position in the mode-line =winum-mode= displays the number.

  Default: =1=

- =winum-ignored-buffers=

  List of buffers to ignore when assigning numbers.

  Default: '(" *which-key*")

- face: =winum-face=

  Face used for the number in the mode-line.

** Configuration file example
Here is an example that you could put in your =.emacs=, which includes all
available winum options.

#+BEGIN_SRC emacs-lisp
  (setq winum-keymap
      (let ((map (make-sparse-keymap)))
        (define-key map (kbd "C-`") 'winum-select-window-by-number)
        (define-key map (kbd "C-²") 'winum-select-window-by-number)
        (define-key map (kbd "M-0") 'winum-select-window-0-or-10)
        (define-key map (kbd "M-1") 'winum-select-window-1)
        (define-key map (kbd "M-2") 'winum-select-window-2)
        (define-key map (kbd "M-3") 'winum-select-window-3)
        (define-key map (kbd "M-4") 'winum-select-window-4)
        (define-key map (kbd "M-5") 'winum-select-window-5)
        (define-key map (kbd "M-6") 'winum-select-window-6)
        (define-key map (kbd "M-7") 'winum-select-window-7)
        (define-key map (kbd "M-8") 'winum-select-window-8)
        map))

  (require 'winum)

  (defun my-winum-assign-func ()
    (cond
     ((equal (buffer-name) "*Calculator*")
      9)
     ((string-match-p (buffer-name) ".*\\*NeoTree\\*.*")
      0)
     (t
      nil)))

  (set-face-attribute 'winum-face nil :weight 'bold)

  (setq window-numbering-scope            'global
        winum-reverse-frame-list          nil
        winum-auto-assign-0-to-minibuffer t
        winum-assign-func                 'my-winum-assign-func
        winum-auto-setup-mode-line        t
        winum-mode-line-position          1
        winum-ignored-buffers             '(" *which-key*"))

  (winum-mode)
#+END_SRC

* Future developments
- send buffer to numbered window

  Send current window's buffer to window N. With prefix argument focus will
  follow.

- swap buffer with numbered window

  Same as previous, but will swap buffers instead of just sending them.

- Evilify

  Adapt the package to the famous `evil-mode` and use a leader key.

- Override native =other-window= (~C-x o~) to use window numbers

- Autocomplete read-from-minibuffer

- Add =winum-format= customize variable

  Format string for displaying the window number in the mode-line. Default to
  " %n " to get a space on each side of the window number.

- Things that you have thought of and I haven't :smile_cat:
