import { NextRequest, NextResponse } from 'next/server'

/**
 * @param {NextRequest} req
 */
export async function POST(req) {
    const { email, senha, ..._ } = await req.json()
    const user = {
        usuario: email.split('@')[0],
        email,
        senha,
    }
    const registerEndPoint = `http://localhost:8080/portoapi/webapi/api/cadastro-usuario`
    let returnMsg = ''

    let response = fetch(registerEndPoint, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
    })
    try {
        response = await response
        if (response.status === 200) {
            returnMsg = 'ok'
        } else {
            returnMsg = 'refused'
        }
    } catch (e) {
        returnMsg = 'error'
    }
    return new NextResponse(
        JSON.stringify({
            msg: returnMsg,
        }),
        {
            status: response.status,
            headers: {
                'Content-Type': 'application/json',
            },
        }
    )
}
