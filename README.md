- Required react-native-reanimated v1 
## Installation

```sh
npm install react-native-mini-player

```

## Usage

```js
import { WrapPlayer} from 'react-native-mini-player';
```

#### Example uses
```js
  <WrapPlayer
          ref={refWrapPlayer}
          renderMiniPlayer={() => {
            return <MiniPlayer songDetail={songDetail} />
          }}
          renderUiFullScreen={() => {
            return <FullPlayer onClose={() => {
              refWrapPlayer.current?.close()
            }} />
          }}
        >
          <MyTabBar {...props} />
        </WrapPlayer>
```
### Props

| Prop name        | Type             | Default value                          | Description                                                                                                                                                                                                    |
| ---------------- | ---------------- | -------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| renderMiniPlayer | JSX.Element| null | Required to render miniplayer component |
| renderUiFullScreen |  JSX.Element| null | Required to render fullscreen UI component. |
| hide        | boolean         | false       | Flag to hide miniplayer                                                                                                                                |
| tabBarHeight  | number           | 80                 | The height of bottom tab                                                                                                        |
| miniPlayerHeight | number | 80 | The maximun height of miniplayer |

### Method

| Method name        | Type             | Default value                          | Description                                                                                                                                                                                                    |
| ---------------- | ---------------- | -------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| open | Function| null | Function to open fullscreen player|
| close |  Function| null |Funtion to close fullscreen player |

### Toddo feate
- TODO feat: update to react-native-reanimated v2


