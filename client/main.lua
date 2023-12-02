-- Testing Stuff, Take out before prod.
RegisterCommand("app", function(_, args)
    SetNuiFocus(true, true)
    OpenApp(args[1])
end)

-- Send data to the NUI
-- @param message The action it belongs too.
-- @param data Data to be transported to the frontend.
function SendMessage(message, data)

    if (not message) then
        return
    end

    SendNuiMessage(json.encode({action = message, data = data}))
end

-- Open an app
-- @param appName The name of the app.

-- App Names: Casing doens't matter as it converts it to all uppercase.
-- CHRISTMAS
function OpenApp(appName)
    SendMessage("ui:app:set", appName)
    SetNuiFocus(true, true)
end

-- Event For Sending Data
RegisterNetEvent("ui_v2:sendMessage", function(message, data)
    SendMessage(message, data)
end)

-- Event for Opening App.
RegisterNetEvent("ui_v2:openApp", function(appName)
    OpenApp(appName)
end)

RegisterNUICallback("/advent/gift/claim", function(data, cb)
    local giftId = data.giftId
    local isSuccess = RPC.execute("nyx_advent:gift:claim", giftId)

    if (isSuccess) then
        cb(true)
    else
        cb(false)
    end
end)

RegisterNUICallback("/ui/exit", function(data, cb)
    SetNuiFocus(false, false)
end)