# (alpha) Theme: comms/test
This is an example for how to build a Comms theme.

## Create new theme
The quickest way to create a new theme is to copy this repository and start building things.
Note: during the theme development phase, you can help with importing demo actions and helper components.

## Upload it to Hub
To use the theme, you first need to build it, zip it and upload it to Hub (hub.comms.dev). See more about [build process](https://github.com/CommsCenter/CommsExamples/tree/master/shares).

`$ docker run comms-hub-dev build-theme -e NODE_ENV.THEME=theme-name -e NODE_ENV.VENDOR=comms`

## Use it in your store
- Open your store Theme settings > Library > Theme, search for the theme, and activate it.
- Find a theme on the Hub, click "Install now", and select Comms store connected to your Comms Auth account.

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
File comms.json contains basic theme and author info, and defines theme settings and capabilities:
 - `theme`
   - `layouts` - See definition for [layouts](https://github.com/CommsCenter/comms-examples/blob/master/shares/06_layouts/README.md)
     - Theme settings > Library > Layouts
     - `layout` can be selected for every page/route in Page builder
     - Page builder shows `layout`'s slots as positions
   - `pages` object - See definition for [pages](https://github.com/CommsCenter/comms-examples/blob/master/shares/03_pages/README.md)
     - Theme settings > Library > Pages
     - `page` can be selected on every page that meets criteria (for example, resolvers)
     - **`page`'s component is added as first component in the layout?**
   - `components` - See definition for [components](https://github.com/CommsCenter/comms-examples/blob/master/shares/05_components/README.md)
     - Theme settings > Library > Components
     - `component` can be added as any other action in Pagebuilder
   - `lists` - See definition for [lists](https://github.com/CommsCenter/comms-examples/blob/master/shares/01_lists/README.md)
     - Theme settings > Library > Lists
     - `list` can be selected in Page builder > Display on every _list_ action
   - `items` - See definition for [items](https://github.com/CommsCenter/comms-examples/blob/master/shares/02_items/README.md)
     - Theme settings > Library > Items
     - `item` can be selected in Page builder > Display on every _list_ action
   - `headers` - See definition for [headers](https://github.com/CommsCenter/comms-examples/blob/master/shares/07_headers/README.md)
     - Theme settings > General > Header

### Autoloading
Themes (and other standalone shares) can load external components that are not directly included in the build. Those options must be set in `comms.json`.

All related keys that expect component name are autoloaded:
 - `item`'s `component` defined as `foo` will prepend `hub-item-vendor-` resulting in `hub-item-bar-foo`
 - `lists`'s `component` defined as `hub-list-foo-bar` will auto-import the component from Hub.
 - `pages`'s `layout` defined as `hub-list-foo-bar` will auto-import the layout from Hub.

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