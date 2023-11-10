import { NextRequest, NextResponse } from 'next/server'

/**
 * @param {NextRequest} req
 */
export async function POST(req) {
    const { email, senha } = await req.json()
    const user = {
        usuario: email.split('@')[0],
        email,
        senha,
    }
    const loginEndPoint = `http://localhost:8080/portoapi/webapi/api/login/${email}`
    let returnMsg = ''
    let response = fetch(loginEndPoint, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
    })
    try {
        response = await response
        const data = await response.text()
        if (data.trim().toLowerCase() === 'validado') {
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
