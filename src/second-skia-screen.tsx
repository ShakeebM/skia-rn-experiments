import {Skia, BlendMode, SkiaView, useDrawCallback, useFont, Canvas, Glyphs, vec} from "@shopify/react-native-skia";
import { View } from "react-native";
 
const paint = Skia.Paint();
paint.setAntiAlias(true);
paint.setBlendMode(BlendMode.Multiply);

export default function SecondScreen({navigation}) {
  const width = 256;
  const height = 256;
  const r = 92;
  
  // const font = useFont(require("./quickstand_bold.otf"), 16);
  // if (font === null) {
  //   return null;
  // }

  const onDraw = useDrawCallback((canvas) => {
    // Cyan Circle
    const cyan = paint.copy();
    cyan.setColor(Skia.Color("cyan"));
    canvas.drawCircle(r, r, r, cyan);
    // Magenta Circle
    const magenta = paint.copy();
    magenta.setColor(Skia.Color("magenta"));
    canvas.drawCircle(width - r, r, r, magenta);
    // Yellow Circle
    const yellow = paint.copy();
    yellow.setColor(Skia.Color("yellow"));
    canvas.drawCircle(width/2, height - r, r, yellow);
  });

  // const onDrawGlyph = useDrawCallback((canvas) => {
  //   // Cyan Circle
  //   const cyan = paint.copy();
  //   cyan.setColor(Skia.Color("cyan"));
  //   canvas.drawText("sdfsdf",12,34,cyan,font)
  //   // Magenta Circle
    
  // });

  // const glyphs = font
  // .getGlyphIDs("Hello World!")
  // .map((id, i) => ({ id, pos: vec(26, i*72) }));

  return (
    <View style={{flex : 1}}>
    <SkiaView style={{ flex: 1 }} onDraw={onDraw} />
    {/* <SkiaView style= {{ flex : 1}} onDraw={onDrawGlyph} /> */}
    {/* <Canvas style={{ flex:  1 }}>
      <Glyphs
        font={font}
        glyphs={glyphs}
      />
    </Canvas> */}
   </View>
  );
}
