function resultado() {
    // Declarar variables para 150 preguntas
    var p = [];
    var correctas = 0;
    var incorrectas = 0;
    var resultadosDetalle = [];
    
    // Definir las respuestas correctas (ID del radio button correcto)
    var respuestasCorrectas = {
        1: 'p11', 2: 'p22', 3: 'p33', 4: 'p42', 5: 'p52',
        6: 'p63', 7: 'p73', 8: 'p82', 9: 'p92', 10: 'p103',
        11: 'p113', 12: 'p121', 13: 'p133', 14: 'p143', 15: 'p152',
        16: 'p162', 17: 'p171', 18: 'p181', 19: 'p191', 20: 'p202',
        21: 'p212', 22: 'p224', 23: 'p232', 24: 'p243', 25: 'p253',
        26: 'p262', 27: 'p272', 28: 'p282', 29: 'p293', 30: 'p302',
        31: 'p312', 32: 'p322', 33: 'p332', 34: 'p342', 35: 'p353',
        36: 'p363', 37: 'p372', 38: 'p383', 39: 'p393', 40: 'p402',
        41: 'p413', 42: 'p422', 43: 'p432', 44: 'p442', 45: 'p453',
        46: 'p462', 47: 'p472', 48: 'p482', 49: 'p492', 50: 'p502',
        51: 'p512', 52: 'p523', 53: 'p532', 54: 'p542', 55: 'p552',
        56: 'p562', 57: 'p572', 58: 'p582', 59: 'p592', 60: 'p602',
        61: 'p612', 62: 'p622', 63: 'p632', 64: 'p643', 65: 'p652',
        66: 'p662', 67: 'p672', 68: 'p682', 69: 'p692', 70: 'p702',
        71: 'p712', 72: 'p722', 73: 'p732', 74: 'p742', 75: 'p751',
        76: 'p762', 77: 'p771', 78: 'p782', 79: 'p792', 80: 'p802',
        81: 'p812', 82: 'p821', 83: 'p831', 84: 'p842', 85: 'p852',
        86: 'p861', 87: 'p871', 88: 'p882', 89: 'p892', 90: 'p902',
        91: 'p912', 92: 'p921', 93: 'p932', 94: 'p942', 95: 'p952',
        96: 'p962', 97: 'p972', 98: 'p981', 99: 'p991', 100: 'p1002',
        101: 'p1011', 102: 'p1022', 103: 'p1032', 104: 'p1041', 105: 'p1051',
        106: 'p1061', 107: 'p1071', 108: 'p1082', 109: 'p1091', 110: 'p1101',
        111: 'p1111', 112: 'p1122', 113: 'p1131', 114: 'p1142', 115: 'p1151',
        116: 'p1162', 117: 'p1171', 118: 'p1181', 119: 'p1191', 120: 'p1201',
        121: 'p1211', 122: 'p1221', 123: 'p1231', 124: 'p1242', 125: 'p1251',
        126: 'p1261', 127: 'p1271', 128: 'p1281', 129: 'p1291', 130: 'p1301',
        131: 'p1311', 132: 'p1321', 133: 'p1331', 134: 'p1341', 135: 'p1351',
        136: 'p1361', 137: 'p1371', 138: 'p1381', 139: 'p1391', 140: 'p1401',
        141: 'p1411', 142: 'p1421', 143: 'p1431', 144: 'p1441', 145: 'p1451',
        146: 'p1461', 147: 'p1471', 148: 'p1481', 149: 'p1491', 150: 'p1501'
    };
    
    // Función para obtener la letra de la respuesta (A, B, C, D)
    function obtenerLetraRespuesta(idElemento) {
        var elemento = document.getElementById(idElemento);
        if (!elemento) return '?';
        var li = elemento.closest('li');
        if (!li) return '?';
        var ol = li.parentElement;
        if (!ol) return '?';
        var items = ol.getElementsByTagName('li');
        for (var i = 0; i < items.length; i++) {
            if (items[i] === li) {
                return String.fromCharCode(65 + i); // A, B, C, D
            }
        }
        return '?';
    }
    
    // Función para obtener el texto de la respuesta
    function obtenerTextoRespuesta(idElemento) {
        var elemento = document.getElementById(idElemento);
        if (!elemento) return 'No encontrada';
        var li = elemento.closest('li');
        if (!li) return 'No encontrada';
        return li.textContent.trim();
    }
    
    // Evaluar cada pregunta
    for (var i = 1; i <= 150; i++) {
        var idCorrecto = respuestasCorrectas[i];
        var elemento = document.getElementById(idCorrecto);
        var estaCorrecta = elemento && elemento.checked;
        
        if (estaCorrecta) {
            p[i] = 1;
            correctas++;
        } else {
            p[i] = 0;
            incorrectas++;
        }
        
        // Guardar detalle para mostrar después
        var letraCorrecta = obtenerLetraRespuesta(idCorrecto);
        var textoCorrecto = obtenerTextoRespuesta(idCorrecto);
        var seleccionado = false;
        var letraSeleccionada = '';
        var textoSeleccionado = '';
        
        // Verificar qué opción seleccionó el usuario
        var ol = elemento ? elemento.closest('ol') : null;
        if (ol) {
            var items = ol.getElementsByTagName('li');
            for (var j = 0; j < items.length; j++) {
                var radio = items[j].querySelector('input[type="radio"]');
                if (radio && radio.checked) {
                    seleccionado = true;
                    letraSeleccionada = String.fromCharCode(65 + j);
                    textoSeleccionado = items[j].textContent.trim();
                    break;
                }
            }
        }
        
        resultadosDetalle.push({
            numero: i,
            correcta: estaCorrecta,
            letraCorrecta: letraCorrecta,
            textoCorrecto: textoCorrecto,
            seleccionado: seleccionado,
            letraSeleccionada: letraSeleccionada,
            textoSeleccionado: textoSeleccionado
        });
    }
    
    // Calcular nota
    var nota = correctas;
    var porcentaje = Math.round((nota / 150) * 100);
    
    // MOSTRAR EL RESULTADO EN PANTALLA
    var resultadoDiv = document.getElementById('resultado');
    if (!resultadoDiv) {
        resultadoDiv = document.createElement('div');
        resultadoDiv.id = 'resultado';
        resultadoDiv.style.margin = '20px 0';
        resultadoDiv.style.padding = '20px';
        resultadoDiv.style.borderRadius = '10px';
        resultadoDiv.style.fontSize = '18px';
        resultadoDiv.style.maxHeight = '600px';
        resultadoDiv.style.overflowY = 'auto';
        document.querySelector('form').appendChild(resultadoDiv);
    }
    
    // Construir el HTML del resultado
    var html = '<h3 style="text-align:center;">📊 RESULTADO DEL EXAMEN</h3>';
    html += '<div style="text-align:center; font-size:24px; margin:15px 0;">';
    html += 'Calificación: <strong>' + nota + '</strong> de 150 (<strong>' + porcentaje + '%</strong>)';
    html += '</div>';
    html += '<div style="display:flex; justify-content:center; gap:30px; margin:15px 0;">';
    html += '<div style="color:#28a745;">✅ Correctas: <strong>' + correctas + '</strong></div>';
    html += '<div style="color:#dc3545;">❌ Incorrectas: <strong>' + incorrectas + '</strong></div>';
    html += '</div>';
    
    // Cambiar color según calificación
    if (porcentaje >= 80) {
        resultadoDiv.style.backgroundColor = '#d4edda';
        resultadoDiv.style.color = '#155724';
        resultadoDiv.style.border = '3px solid #28a745';
        html += '<div style="text-align:center; font-size:28px; margin:10px 0;">🌟 ¡Excelente trabajo!</div>';
    } else if (porcentaje >= 60) {
        resultadoDiv.style.backgroundColor = '#cce5ff';
        resultadoDiv.style.color = '#004085';
        resultadoDiv.style.border = '3px solid #007bff';
        html += '<div style="text-align:center; font-size:28px; margin:10px 0;">👍 Bien, pero puedes mejorar</div>';
    } else if (porcentaje >= 40) {
        resultadoDiv.style.backgroundColor = '#fff3cd';
        resultadoDiv.style.color = '#856404';
        resultadoDiv.style.border = '3px solid #ffc107';
        html += '<div style="text-align:center; font-size:28px; margin:10px 0;">📚 Necesitas estudiar más</div>';
    } else {
        resultadoDiv.style.backgroundColor = '#f8d7da';
        resultadoDiv.style.color = '#721c24';
        resultadoDiv.style.border = '3px solid #dc3545';
        html += '<div style="text-align:center; font-size:28px; margin:10px 0;">😓 Debes repasar el material</div>';
    }
    
    // Mostrar detalle de todas las preguntas
    html += '<hr><h4 style="margin-top:20px;">📝 Detalle de respuestas:</h4>';
    html += '<div style="max-height:400px; overflow-y:auto; font-size:14px;">';
    html += '<table style="width:100%; border-collapse:collapse;">';
    html += '<thead style="position:sticky; top:0; background:#f8f9fa;">';
    html += '<tr>';
    html += '<th style="padding:8px; border:1px solid #ddd;">#</th>';
    html += '<th style="padding:8px; border:1px solid #ddd;">Estado</th>';
    html += '<th style="padding:8px; border:1px solid #ddd;">Tu respuesta</th>';
    html += '<th style="padding:8px; border:1px solid #ddd;">Respuesta correcta</th>';
    html += '</tr>';
    html += '</thead>';
    html += '<tbody>';
    
    for (var k = 0; k < resultadosDetalle.length; k++) {
        var r = resultadosDetalle[k];
        var estado = r.correcta ? '✅ Correcta' : '❌ Incorrecta';
        var colorFila = r.correcta ? '#d4edda' : '#f8d7da';
        var tuRespuesta = r.seleccionado ? r.letraSeleccionada + ') ' + r.textoSeleccionado : 'No respondida';
        var respuestaCorrecta = r.letraCorrecta + ') ' + r.textoCorrecto;
        
        html += '<tr style="background-color:' + colorFila + ';">';
        html += '<td style="padding:5px; border:1px solid #ddd; text-align:center;">' + r.numero + '</td>';
        html += '<td style="padding:5px; border:1px solid #ddd; text-align:center;">' + estado + '</td>';
        html += '<td style="padding:5px; border:1px solid #ddd;">' + tuRespuesta + '</td>';
        html += '<td style="padding:5px; border:1px solid #ddd; font-weight:bold; color:#155724;">' + respuestaCorrecta + '</td>';
        html += '</tr>';
    }
    
    html += '</tbody></table></div>';
    
    resultadoDiv.innerHTML = html;
    resultadoDiv.scrollIntoView({ behavior: 'smooth', block: 'center' });
}