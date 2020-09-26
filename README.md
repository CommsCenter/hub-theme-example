# (alpha) Theme: comms/test
This is an example for how to build a Comms theme.

## Create new theme
The quickest way to create a new theme is to copy this repository and start building things.
Note: during the theme development phase, you can help with importing demo actions and helper components.

## Upload it to Hub
To use the theme, you first need to zip it and upload it to Hub (hub.comms.dev).

## Use it in your store
Open your store theme settings, search for the theme and activate it.

# Theme structure
You only need to zip and upload only the dist directory.

./dist/
  comms.json
  assets/
    ...
  build/
    ...
  layouts/
    ...
  pages/
    ...
  translations/
    ...
./src/

## comms.json
File comms.json contains basic theme and author info, and defines some theme settings.

## ./dist/assets/
Assets folder contains all public accessible files including JS builds, CSS, images and fonts. The folder will be available under URL /storage/theme/vendor/identifier/assets/.

## ./dist/build/
Build contains your JS build made from ./src/js/.

## ./dist/layouts/
Layout are accessible in the page builder, and as wrappers for custom pages.

## ./dist/pages/
Pages will be embedded into existing or custom layouts.

## ./dist/translations/
Translations will be available, but they won't be imported.

# Support
bojan@comms.dev - support@comms.dev

[Google Docs](https://docs.google.com/document/d/1IMnrldSreonteAo2hb9GwwMbqiQpTB_zcaQGfOabJmc)