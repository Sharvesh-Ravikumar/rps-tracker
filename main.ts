input.onButtonPressed(Button.A, function () {
    basic.showString("A")
    player_a += 1
    rounds += 1
    Update_scores()
    basic.pause(2000)
    basic.clearScreen()
})
input.onButtonPressed(Button.AB, function () {
    basic.showString("T")
    tie += 1
    rounds += 1
    Update_scores()
    basic.pause(2000)
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    basic.showString("B")
    player_b += 1
    rounds += 1
    Update_scores()
    basic.pause(2000)
    basic.clearScreen()
})
input.onGesture(Gesture.Shake, function () {
    Reset()
})
function Reset () {
    OLED.init(128, 64)
    rounds = 0
    player_a = 0
    player_b = 0
    tie = 0
    OLED.writeStringNewLine("Shall We Play A Game?")
    basic.pause(2000)
    OLED.clear()
    OLED.writeStringNewLine("PlayerA:")
    OLED.newLine()
    OLED.writeStringNewLine("PlayerB:")
    OLED.newLine()
    OLED.writeStringNewLine("Rounds:")
    OLED.newLine()
    OLED.writeStringNewLine("Tie:")
}
function Update_scores () {
    OLED.clear()
    OLED.writeStringNewLine("PlayerA: " + player_a)
    OLED.newLine()
    OLED.writeStringNewLine("PlayerB: " + player_b)
    OLED.newLine()
    OLED.writeStringNewLine("Tie:" + tie)
    OLED.newLine()
    OLED.writeStringNewLine("Rounds" + rounds)
}
let player_b = 0
let tie = 0
let rounds = 0
let player_a = 0
Reset()
