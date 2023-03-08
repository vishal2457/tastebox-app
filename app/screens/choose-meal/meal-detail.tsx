import React from "react"
import { Image, View, ViewStyle } from "react-native"
import { Button, Screen, Text } from "../../components"
import { BackButton } from "../../components/back-button"
import { Group } from "../../components/group.component"
import { spacing } from "../../theme"
import { margin, marginT } from "../../theme/utils"
import { TagPill } from "../onboarding/components/tag-pill.component"

const fp = require("../../../assets/images/food-plate.png")

export const MealDetail = ({ navigation }) => {
  return (
    <Screen preset="scroll" safeAreaEdges={["top"]} contentContainerStyle={$container}>
      <View style={$semiContainer} >
      <View>
      <BackButton func={navigation.goBack} />
      <Group content="center">
        <Text size="lg" weight="semiBold">
          Creamy macroni pasta salad
        </Text>
      </Group>

      <Group style={marginT.massive} content="around">
        <Image source={fp} style={{ width: 160, height: 160 }} />
        <View>
          <Group>
            <View style={margin.medium}>
              <Text size="md">Protien</Text>
              <Text size="sm" weight="semiBold">
                45gm
              </Text>
            </View>
            <View style={margin.medium}>
              <Text size="md">Energy</Text>
              <Text size="sm" weight="semiBold">
                45gm
              </Text>
            </View>
          </Group>
          <Group>
            <View style={margin.medium}>
              <Text size="md">Fat</Text>
              <Text size="sm" weight="semiBold">
                45gm
              </Text>
            </View>
            <View style={margin.medium}>
              <Text size="md">Carbs</Text>
              <Text size="sm" weight="semiBold">
                45gm
              </Text>
            </View>
          </Group>
        </View>
      </Group>

      <View style={marginT.medium}>
        <Text preset="subheading">Description</Text>
        <Text size="xs" ellipsizeMode="tail" numberOfLines={3} >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius similique ab excepturi
          voluptatum illo quaerat, quo asperiores quam provident molestias.
        </Text>
      </View>

      <View style={marginT.large}>
        <Text preset="subheading">Ingredients</Text>
        <Group wrap>
          {["fortune oil", "potatoe", "onion", "garlic", "salt", "chillie", "wheat", "rice"].map(
            (item) => {
              return <TagPill tag={item} key={item}  selected />
            },
          )}
        </Group>
      </View>
      </View>
        <Button text="Add to your menu" preset="reversed" onPress={navigation.goBack} />
      </View>

    </Screen>
  )
}

const $container: ViewStyle = {
  paddingVertical: spacing.large,
  paddingHorizontal: spacing.medium,
  minHeight: "100%",
}


const $semiContainer: ViewStyle = {
  flexGrow: 1,
  justifyContent: 'space-between'
}