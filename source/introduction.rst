Introduction
============

To collectively work on the documentation:

Installation, pull, push
------------------------

1. Download `Sphinx <https://www.sphinx-doc.org/en/master/usage/installation.html>`_ and install.

    .. raw:: html
      <br>

2. Clone the github repository or pull it from the repository: xxx

 .. raw:: html
      <br>

3. 

    In the Terminal, go to the local folder of the repository and type::

        make html

4. Go to the folder ``html`` in the folder ``build`` and double-click ``index.html`` to check whether it works.

 .. raw:: html
      <br>

5. Edit (see below).
 .. raw:: html
      <br>

6. 

    After editing, push the new version to github.

Editing an existing page / document
-----------------------------------

1. In the ``source``-folder, open the respective ``*.rst``-file with an editor.

 .. raw:: html
      <br>

2.  Edit the document and save it. Add your content using ``reStructuredText`` syntax. See the `reStructuredText <https://www.sphinx-doc.org/en/master/usage/restructuredtext/index.html>`_ documentation for details.

 .. raw:: html
      <br>
      
3. 

    To build it locally, type in the Terminal::

        make html

4. 

    Go to the folder ``html`` in the folder ``build`` and double-click ``index.html`` to check whether it worked.

Adding a new page / document
----------------------------

1.

    If you want to add e.g. a document with the name "audio" as a subpage to the document / page Documentation, open ``documentation.rst`` in the ``source``-folder and add the following text::

        .. toctree::
        :maxdepth: 2
        :caption: Contents:

        audio

    or just add the document name in the toctree-list if there is one already.

2. 

    Navigate to the ``source``-folder in the Terminal and write::

        touch audio.rst

3. 

    You see now the new document ``audio.rst`` in the ``source``-folder. Open it, edit and then build by typing in the terminal::

        make html

4. 

    Go to the folder ``html`` in the folder ``build`` and double-click ``index.html`` to check whether it worked.

