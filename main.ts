input.onButtonPressed(Button.A, function () {
	
})
input.onGesture(Gesture.Shake, function () {
    rounds = 0
    player_a = 0
    player_b = 0
    tie = 0
    OLED.writeStringNewLine("Shall We Play A Game?")
    basic.pause(2000)
    OLED.clear()
})
function Update_scores () {
    OLED.clear()
    OLED.writeStringNewLine("PlayerA: " + player_a)
    OLED.writeStringNewLine("PlayerB: " + player_b)
    OLED.writeStringNewLine("Tie:" + tie)
    OLED.writeStringNewLine("Rounds" + rounds)
}
let tie = 0
let player_b = 0
let player_a = 0
let rounds = 0
OLED.init(128, 64)
rounds = 0
player_a = 0
player_b = 0
tie = 0
OLED.writeStringNewLine("Shall We Play A Game?")
basic.pause(2000)
OLED.clear()
