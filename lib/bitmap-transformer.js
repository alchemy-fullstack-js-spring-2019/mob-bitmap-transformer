const { BitmapHeader } = require('./bitmap-header');
const PixelReader = require('./pixel-reader');

class BitmapTransform {
  constructor(buffer) {
    this.buffer = buffer;
    this.header = new BitmapHeader(buffer);
  }

  transform(fn, callback) {
    const pixelReader = new PixelReader(this.header);
    let newBuffer = this.buffer.slice(this.header.pixelOffset);
    
    pixelReader.on('color', (buffcolor) => {
      const offset = buffcolor.offset;
      // delete buffcolor.offset;
      const transformed = fn(buffcolor);
      // keys returned alph (b,g,offset,r). why?

      newBuffer.writeUInt8(transformed.b, offset);
      newBuffer.writeUInt8(transformed.g, offset + 1);
      newBuffer.writeUInt8(transformed.r, offset + 2);
      
    });
    
    // this.buffer.writeUInt8(newBuffer, this.header.pixelOffset);
    
    pixelReader.on('end', callback);
    pixelReader.read(newBuffer);


  }
}

module.exports = {
  BitmapTransform
};
