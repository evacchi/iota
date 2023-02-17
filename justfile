
test:
  just go/test
  just rust/test
  cd codegen && apex test && cd testdata && ./diffcheck.sh

codegen:
  just codegen/build
