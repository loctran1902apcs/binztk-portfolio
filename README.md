# README

## Install
* Cài các libraries của gem ``bundle install``
* Cài node_modules ``yarn install``

## Usage
### TailwindCSS
* Build TailwindCSS ``yarn css:build``. Câu lệnh này sẽ build tailwindCSS từ file tailwind.config.js thành file CSS tĩnh.
* File này sẽ được load vào jekyll
* Khi thay đổi tailwind.config.js thì chạy lại ``yarn css:build`` để build lại tailwind.

### Webpack
* `yarn develop:webpack`
* Câu lệnh này sẽ chạy webpack. Webpack sẽ compile tất cả file js có trong folder ``_webpack``. Và build thành file JS để trong `assets/js/bundle.js`
* File này sẽ được load trong jekyll

### Run Jekyll
* `yarn jekyll:dev`
* Câu lệnh này sẽ serve trang tĩnh

### Run All
* `yarn dev`
* Câu lệnh này để chạy tất cả những thứ trên.
