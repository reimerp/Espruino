SDA=B7;SCL=B6;
ADD=0;
//ADD=0x77;

function readFrom(i2c,id,c) {
  try {
    return i2c.readFrom(id,c);
  }
  catch(e) {
    return 'no device ['+e+']';
  }
}

console.log('\I2C Soft and Hard Test');

// I2C-Soft
i2c = new I2C();
i2c.setup({sda:SDA,scl:SCL});
rc = 
console.log('I2C-Soft readFrom(0,1):', readFrom(i2c,ADD,1));

// I2C-Soft
I2C1.setup({sda:SDA,scl:SCL});
console.log('I2C-Hard readFrom(0,1):', readFrom(I2C1,ADD,1));

/*
non-existent:
I2C-Soft readFrom(0,1): new Uint8Array([255])
I2C-Hard readFrom(0,1): no device [InternalError: Timeout on I2C Read Receive Mode]

existent:
I2C-Soft readFrom(0,1): new Uint8Array([251])
I2C-Hard readFrom(0,1): new Uint8Array([180])
*/